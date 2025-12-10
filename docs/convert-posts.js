const fs = require('fs');
const path = require('path');

// Map folder names to slugs
function folderToSlug(folderName) {
  return folderName
    .replace(/^\d+-leetcode-/, '')
    .replace(/^17-solving-leetcode-problems$/, 'solving-leetcode-problems')
    .replace(/^18-solving-leetcode-problems-part2$/, 'solving-leetcode-problems-part2')
    .replace(/^21-leetcode$/, 'leetcode-intro')
    .replace(/^48-my-leetcode-journey$/, 'my-leetcode-journey')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Extract difficulty from title or content
function extractDifficulty(title, content) {
  const lower = (title + ' ' + content).toLowerCase();
  if (lower.includes('hard problem') || lower.includes('hard difficulty')) return 'Hard';
  if (lower.includes('medium problem') || lower.includes('medium difficulty')) return 'Medium';
  if (lower.includes('easy problem') || lower.includes('easy difficulty')) return 'Easy';
  return 'Unknown';
}

// Extract tags from content
function extractTags(content) {
  const tags = new Set();
  const lower = content.toLowerCase();
  
  const commonTags = [
    'array', 'hash-table', 'linked-list', 'two-pointers', 'string',
    'binary-search', 'dynamic-programming', 'backtracking', 'tree',
    'graph', 'greedy', 'stack', 'queue', 'sliding-window', 'math',
    'bit-manipulation', 'sorting', 'divide-and-conquer', 'trie',
    'union-find', 'design', 'heap', 'recursion', 'dfs', 'bfs'
  ];
  
  commonTags.forEach(tag => {
    if (lower.includes(tag.replace('-', ' ')) || lower.includes(tag)) {
      tags.add(tag);
    }
  });
  
  return Array.from(tags).slice(0, 5);
}

// Extract languages from code blocks
function extractLanguages(content) {
  const languages = new Set();
  const codeBlockRegex = /```(\w+)/g;
  let match;
  
  while ((match = codeBlockRegex.exec(content)) !== null) {
    const lang = match[1].toLowerCase();
    const langMap = {
      'python': 'Python',
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'java': 'Java',
      'cpp': 'C++',
      'c': 'C',
      'php': 'PHP',
      'go': 'Go',
      'rust': 'Rust',
      'scala': 'Scala',
      'sql': 'SQL',
      'erl': 'Erlang',
      'ex': 'Elixir'
    };
    
    if (langMap[lang]) {
      languages.add(langMap[lang]);
    }
  }
  
  return Array.from(languages).length > 0 ? Array.from(languages) : ['Python'];
}

// Convert markdown to JSX sections
function markdownToJSX(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let currentSection = null;
  let currentParagraph = [];
  let inCodeBlock = false;
  let codeBlockLang = '';
  let codeBlockContent = [];
  
  function flushParagraph() {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        if (!currentSection) {
          currentSection = { type: 'section', content: [] };
        }
        // Convert markdown formatting to JSX
        let jsxText = text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/`([^`]+)`/g, '<code className="bg-gray-100 px-1 rounded">$1</code>');
        currentSection.content.push({ type: 'p', text: jsxText });
      }
      currentParagraph = [];
    }
  }
  
  function flushCodeBlock() {
    if (codeBlockContent.length > 0) {
      if (!currentSection) {
        currentSection = { type: 'section', content: [] };
      }
      const code = codeBlockContent.join('\n');
      currentSection.content.push({ type: 'code', lang: codeBlockLang, code });
      codeBlockContent = [];
      codeBlockLang = '';
    }
  }
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        flushCodeBlock();
        inCodeBlock = false;
      } else {
        flushParagraph();
        inCodeBlock = true;
        codeBlockLang = line.substring(3).trim() || 'text';
      }
      continue;
    }
    
    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }
    
    // Headers
    if (line.startsWith('### ')) {
      flushParagraph();
      flushCodeBlock();
      if (currentSection) sections.push(currentSection);
      currentSection = { type: 'section', title: line.substring(4), content: [] };
      continue;
    }
    
    if (line.startsWith('## ')) {
      flushParagraph();
      flushCodeBlock();
      if (currentSection) sections.push(currentSection);
      currentSection = { type: 'section', title: line.substring(3), content: [] };
      continue;
    }
    
    if (line.startsWith('# ')) {
      flushParagraph();
      flushCodeBlock();
      if (currentSection) sections.push(currentSection);
      currentSection = { type: 'section', title: line.substring(2), content: [] };
      continue;
    }
    
    // Lists
    if (line.match(/^[\-\*] /) || line.match(/^\d+\. /)) {
      flushParagraph();
      if (!currentSection) {
        currentSection = { type: 'section', content: [] };
      }
      const listItem = line.replace(/^[\-\*] /, '').replace(/^\d+\. /, '');
      currentSection.content.push({ type: 'li', text: listItem });
      continue;
    }
    
    // Empty line
    if (line === '') {
      flushParagraph();
      continue;
    }
    
    // Regular paragraph
    currentParagraph.push(line);
  }
  
  flushParagraph();
  flushCodeBlock();
  if (currentSection) sections.push(currentSection);
  
  // Convert sections to JSX string
  let jsx = '';
  sections.forEach((section, idx) => {
    if (section.title) {
      const level = section.title.match(/^#+/) ? section.title.match(/^#+/)[0].length : 0;
      const titleText = section.title.replace(/^#+\s*/, '');
      const headingTag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';
      const headingClass = level === 1 ? 'text-2xl font-bold' : level === 2 ? 'text-xl font-semibold' : 'text-lg font-semibold';
      jsx += `      <section className="space-y-3">\n`;
      jsx += `        <${headingTag} className="${headingClass}">${titleText}</${headingTag}>\n`;
    } else {
      jsx += `      <section className="space-y-3">\n`;
    }
    
    let inList = false;
    section.content.forEach(item => {
      if (item.type === 'p') {
        if (inList) {
          jsx += `        </ul>\n`;
          inList = false;
        }
        jsx += `        <p>${item.text}</p>\n`;
      } else if (item.type === 'li') {
        if (!inList) {
          jsx += `        <ul className="list-disc space-y-2 pl-5">\n`;
          inList = true;
        }
        jsx += `          <li>${item.text}</li>\n`;
      } else if (item.type === 'code') {
        if (inList) {
          jsx += `        </ul>\n`;
          inList = false;
        }
        const escapedCode = item.code
          .replace(/\\/g, '\\\\')
          .replace(/`/g, '\\`')
          .replace(/\${/g, '\\${')
          .replace(/\n/g, '\\n');
        jsx += `        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{\`${escapedCode}\`}</code></pre>\n`;
      }
    });
    
    if (inList) {
      jsx += `        </ul>\n`;
    }
    jsx += `      </section>\n`;
  });
  
  return jsx || '      <section className="space-y-3">\n        <p>content coming soon...</p>\n      </section>';
}

// Parse frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const frontmatterText = match[1];
  const body = match[2];
  const frontmatter = {};
  
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      // Remove quotes
      value = value.replace(/^["']|["']$/g, '');
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, body };
}

// Find solution files
function findSolutionFiles(slug) {
  const solutions = [];
  const possiblePaths = [
    `../${slug}/solution.py`,
    `../${slug}/solution.ts`,
    `../${slug}/solution.php`,
    `../${slug}/solution.cpp`,
    `../${slug}/solution.c`,
    `../${slug}/solution.java`,
    `../${slug}/solution.go`,
    `../${slug}/solution.rs`,
  ];
  
  // Also check for variations
  const slugVariations = [
    slug,
    slug.replace(/-/g, ' '),
    slug.replace(/-/g, ''),
  ];
  
  return solutions;
}

// Generate TSX file
function generateTSX(markdownPath, outputDir) {
  const content = fs.readFileSync(markdownPath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(content);
  
  const folderName = path.basename(path.dirname(markdownPath));
  const slug = folderToSlug(folderName);
  const title = frontmatter.title || folderName.replace(/^\d+-leetcode-/, '').replace(/-/g, ' ');
  const description = frontmatter.description || '';
  const date = frontmatter.date || '2024-01-01';
  const summary = description.substring(0, 150) || title.toLowerCase();
  
  const difficulty = extractDifficulty(title, body);
  const tags = extractTags(body);
  const languages = extractLanguages(body);
  
  // Estimate reading time (rough: 200 words per minute)
  const wordCount = body.split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));
  
  // Generate LeetCode link
  const problemName = slug.replace(/-/g, '-');
  const leetCodeLink = `https://leetcode.com/problems/${problemName}/`;
  
  // Convert markdown body to JSX
  const jsxBody = markdownToJSX(body);
  
  // Generate TSX content
  const varName = slug.replace(/-/g, '').replace(/^(\d)/, 'p$1').replace(/[^a-zA-Z0-9]/g, '');
  const cleanTitle = title.replace(/LeetCode \d+: /, '').replace(/"/g, '\\"');
  const cleanSummary = summary.replace(/"/g, '\\"').substring(0, 150);
  
  const tsxContent = `import { LeetCodePost } from "./types";

export const ${varName}: LeetCodePost = {
  slug: "${slug}",
  title: "${cleanTitle}",
  summary: "${cleanSummary}",
  publishedAt: "${date}",
  difficulty: "${difficulty}",
  languages: ${JSON.stringify(languages)},
  tags: ${JSON.stringify(tags)},
  leetCodeLink: "${leetCodeLink}",
  estimatedReadingMinutes: ${readingMinutes},
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
${jsxBody}
    </article>
  ),
};
`;

  const outputPath = path.join(outputDir, `${slug}.tsx`);
  fs.writeFileSync(outputPath, tsxContent, 'utf-8');
  
  return { slug, varName };
}

// Main conversion function
function convertAllPosts() {
  const sourceDir = path.join(__dirname, '..', 'leetcode-problems-new');
  const outputDir = path.join(__dirname, 'content', 'posts');
  const indexFile = path.join(outputDir, 'index.ts');
  
  // Read existing index to get current imports
  const existingIndex = fs.readFileSync(indexFile, 'utf-8');
  const existingImports = new Set();
  const existingSlugs = new Set();
  
  // Extract existing imports and slugs
  const importRegex = /import \{ (\w+) \} from "\.\/([^"]+)";/g;
  let match;
  while ((match = importRegex.exec(existingIndex)) !== null) {
    existingImports.add(match[2].replace('.tsx', ''));
  }
  
  const slugRegex = /slug: "([^"]+)"/g;
  while ((match = slugRegex.exec(existingIndex)) !== null) {
    existingSlugs.add(match[1]);
  }
  
  // Get all markdown files
  const folders = fs.readdirSync(sourceDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .sort();
  
  const newPosts = [];
  
  folders.forEach(folder => {
    const mdPath = path.join(sourceDir, folder, 'index.md');
    if (!fs.existsSync(mdPath)) return;
    
    const { slug } = generateTSX(mdPath, outputDir);
    
    if (!existingSlugs.has(slug)) {
      const varName = slug.replace(/-/g, '').replace(/^(\d)/, 'p$1');
      newPosts.push({ slug, varName, fileName: slug });
      console.log(`Created: ${slug}.tsx`);
    } else {
      console.log(`Skipped (already exists): ${slug}.tsx`);
    }
  });
  
  // Update index.ts
  if (newPosts.length > 0) {
    let newImports = '';
    let newExports = '';
    
    newPosts.forEach(({ varName, fileName }) => {
      newImports += `import { ${varName} } from "./${fileName}";\n`;
      newExports += `  ${varName},\n`;
    });
    
    // Insert imports after existing imports
    const lastImportIndex = existingIndex.lastIndexOf('import');
    const nextLineAfterImports = existingIndex.indexOf('\n', lastImportIndex) + 1;
    const updatedIndex = existingIndex.slice(0, nextLineAfterImports) + 
                        newImports + 
                        existingIndex.slice(nextLineAfterImports);
    
    // Insert into manualPosts array
    const manualPostsStart = updatedIndex.indexOf('const manualPosts: LeetCodePost[] = [');
    const manualPostsEnd = updatedIndex.indexOf('];', manualPostsStart);
    const updatedIndex2 = updatedIndex.slice(0, manualPostsEnd) + 
                         newExports + 
                         updatedIndex.slice(manualPostsEnd);
    
    fs.writeFileSync(indexFile, updatedIndex2, 'utf-8');
    console.log(`\nUpdated index.ts with ${newPosts.length} new posts`);
  } else {
    console.log('\nNo new posts to add');
  }
}

// Run conversion
convertAllPosts();

