import { LeetCodePost } from "./types";

export const serializeanddeserializebinarytree: LeetCodePost = {
  slug: "serialize-and-deserialize-binary-tree",
  title: "serialize and deserialize binary tree",
  summary: "serialize and deserialize binary tree",
  publishedAt: "2024-01-01",
  difficulty: "Hard",
  languages: ["Rust"],
  tags: ["string","tree","stack","design","recursion"],
  leetCodeLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
  estimatedReadingMinutes: 7,
  solutionPaths: [],
  body: () => (
    <article className="space-y-6">
      <section className="space-y-3">
</section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">LeetCode 297: Serialize and Deserialize Binary Tree</h3>
        <p>i recently solved the serialize and deserialize binary tree problem on leetcode, and it's a great example of tree traversal and memory management. this hard problem tests your understanding of binary trees, serialization techniques, and efficient data structure implementation.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Problem Statement</h3>
        <p>serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.</p>
        <p>design an algorithm to serialize and deserialize a binary tree. there is no restriction on how your serialization/deserialization algorithm should work. you just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.</p>
        <p><strong>example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`input: root = [1,2,3,null,null,4,5]\noutput: [1,2,3,null,null,4,5]`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Approach</h3>
        <p>when i first saw this problem, i immediately thought about using a preorder traversal approach. the key insight is that we can use a simple string format with null markers to represent the tree structure, and then reconstruct it using the same traversal order.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Initial Thoughts</h3>
        <p>i started by thinking about different approaches:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**preorder traversal** - serialize root, left, right with null markers</li>
          <li>**level order traversal** - serialize level by level</li>
          <li>**inorder + preorder** - use two traversals for reconstruction</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Solution Strategy</h3>
        <p>i decided to use a <strong>preorder traversal approach</strong> with the following strategy:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**serialization** - use preorder traversal with "#" for null nodes</li>
          <li>**deserialization** - reconstruct tree from serialized string</li>
          <li>**memory management** - handle rust's ownership system properly</li>
          <li>**string processing** - efficient string parsing and building</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">My Solution</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`use std::rc::Rc;\nuse std::cell::RefCell;\n\nstruct codec;\n\nimpl codec {\nfn new() -&gt; Self {\ncodec\n}\n\nfn serialize(&self, root: Option<Rc<RefCell<TreeNode>>>) -&gt; String {\nlet mut result = String::new();\nself.serialize_helper(root, &mut result);\nresult\n}\n\nfn serialize_helper(&self, node: Option<Rc<RefCell<TreeNode>>>, result: &mut String) {\nmatch node {\nNone =&gt; {\nresult.push_str("#,");\n}\nSome(node_ref) =&gt; {\nlet node = node_ref.borrow();\nresult.push_str(&node.val.to_string());\nresult.push(',');\nself.serialize_helper(node.left.clone(), result);\nself.serialize_helper(node.right.clone(), result);\n}\n}\n}\n\nfn deserialize(&self, data: String) -&gt; Option<Rc<RefCell<TreeNode>>&gt; {\nlet mut iter = data.split(',').peekable();\nself.deserialize_helper(&mut iter)\n}\n\nfn deserialize_helper(&self, iter: &mut std::iter::Peekable<std::str::Split<char>>) -&gt; Option<Rc<RefCell<TreeNode>>&gt; {\nif let Some(&val_str) = iter.peek() {\nif val_str == "#" {\niter.next();\nreturn None;\n}\n\nif let Ok(val) = val_str.parse::<i32>() {\niter.next();\nlet mut node = TreeNode::new(val);\nnode.left = self.deserialize_helper(iter);\nnode.right = self.deserialize_helper(iter);\nreturn Some(Rc::new(RefCell::new(node)));\n}\n}\nNone\n}\n}\n\nimpl solution {\nfn serialize(root: Option<Rc<RefCell<TreeNode>>>) -&gt; String {\nlet codec = codec::new();\ncodec.serialize(root)\n}\n\nfn deserialize(data: String) -&gt; Option<Rc<RefCell<TreeNode>>&gt; {\nlet codec = codec::new();\ncodec.deserialize(data)\n}\n}`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Code Breakdown</h3>
        <p>let me walk through how this solution works:</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">1. Tree Node Structure</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`#[derive(Debug, PartialEq, Eq)]\npub struct treenode {\npub val: i32,\npub left: Option<Rc<RefCell<TreeNode>>>,\npub right: Option<Rc<RefCell<TreeNode>>>,\n}`}</code></pre>
        <p>we define the tree node with:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**val**: integer value</li>
          <li>**left/right**: optional references to child nodes</li>
          <li>
            <strong>Rc&lt;RefCell&lt;&gt;&gt;</strong>: shared ownership with interior
            mutability
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">2. Serialization Process</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`fn serialize(&self, root: Option<Rc<RefCell<TreeNode>>>) -&gt; String {\nlet mut result = String::new();\nself.serialize_helper(root, &mut result);\nresult\n}`}</code></pre>
        <p>the serialization process:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>start with empty string</li>
          <li>use helper function for recursive traversal</li>
          <li>build string incrementally</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">3. Serialization Helper</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`fn serialize_helper(&self, node: Option<Rc<RefCell<TreeNode>>>, result: &mut String) {\nmatch node {\nNone =&gt; {\nresult.push_str("#,");\n}\nSome(node_ref) =&gt; {\nlet node = node_ref.borrow();\nresult.push_str(&node.val.to_string());\nresult.push(',');\nself.serialize_helper(node.left.clone(), result);\nself.serialize_helper(node.right.clone(), result);\n}\n}\n}`}</code></pre>
        <p>recursive serialization logic:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**null node**: add "#," to string</li>
          <li>**valid node**: add value, comma, then recurse on children</li>
          <li>**preorder**: root, left, right</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">4. Deserialization Process</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`fn deserialize(&self, data: String) -&gt; Option<Rc<RefCell<TreeNode>>&gt; {\nlet mut iter = data.split(',').peekable();\nself.deserialize_helper(&mut iter)\n}`}</code></pre>
        <p>deserialization setup:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>split string by commas</li>
          <li>use peekable iterator for efficient parsing</li>
          <li>call helper function for reconstruction</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">5. Deserialization Helper</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`fn deserialize_helper(&self, iter: &mut std::iter::Peekable<std::str::Split<char>>) -&gt; Option<Rc<RefCell<TreeNode>>&gt; {\nif let Some(&val_str) = iter.peek() {\nif val_str == "#" {\niter.next();\nreturn None;\n}\n\nif let Ok(val) = val_str.parse::<i32>() {\niter.next();\nlet mut node = treenode::new(val);\nnode.left = self.deserialize_helper(iter);\nnode.right = self.deserialize_helper(iter);\nreturn Some(Rc::new(RefCell::new(node)));\n}\n}\nNone\n}`}</code></pre>
        <p>reconstruction logic:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**peek at next value** without consuming</li>
          <li>**null marker**: consume and return None</li>
          <li>**valid value**: parse, create node, recurse on children</li>
          <li>**preorder reconstruction**: matches serialization order</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Example Walkthrough</h3>
        <p>let's trace through the example: [1,2,3,null,null,4,5]</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`tree structure:\n1\n/ \\\n2   3\n/ \\\n4   5\n\nserialization:\n- visit 1: "1,"\n- visit 2: "1,2,"\n- visit null (left of 2): "1,2,#,"\n- visit null (right of 2): "1,2,#,#,"\n- visit 3: "1,2,#,#,3,"\n- visit 4: "1,2,#,#,3,4,"\n- visit null (left of 4): "1,2,#,#,3,4,#,"\n- visit null (right of 4): "1,2,#,#,3,4,#,#,"\n- visit 5: "1,2,#,#,3,4,#,#,5,"\n- visit null (left of 5): "1,2,#,#,3,4,#,#,5,#,"\n- visit null (right of 5): "1,2,#,#,3,4,#,#,5,#,#,"\n\nfinal result: "1,2,#,#,3,4,#,#,5,#,#,"\n\ndeserialization:\n- parse "1": create node(1)\n- parse "2": create node(2) as left child\n- parse "#": left child of node(2) is null\n- parse "#": right child of node(2) is null\n- parse "3": create node(3) as right child\n- parse "4": create node(4) as left child of node(3)\n- parse "#": left child of node(4) is null\n- parse "#": right child of node(4) is null\n- parse "5": create node(5) as right child of node(3)\n- parse "#": left child of node(5) is null\n- parse "#": right child of node(5) is null\n\nreconstructed tree matches original structure`}</code></pre>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Time and Space Complexity</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**time complexity:** O(n) for both serialization and deserialization</li>
          <li>**space complexity:** O(n) for the serialized string and recursion stack</li>
        </ul>
        <p>the algorithm is efficient because:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>we visit each node exactly once during serialization</li>
          <li>we parse each token exactly once during deserialization</li>
          <li>string operations are linear in the number of nodes</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Key Insights</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**preorder traversal** - preserves tree structure for reconstruction</li>
          <li>**null markers** - handle missing nodes in serialization</li>
          <li>
            <strong>rust ownership</strong> - use{" "}
            <code>Rc&lt;RefCell&lt;&gt;&gt;</code> for shared mutable ownership
          </li>
          <li>**iterator parsing** - efficient string parsing with peekable iterator</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Alternative Approaches</h3>
        <p>i also considered:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**level order traversal** - serialize level by level</li>
          <li>more complex implementation</li>
          <li>handles complete trees well</li>
          <li>same time complexity</li>
          <li>**inorder + preorder** - use two traversals</li>
          <li>requires more storage</li>
          <li>more complex reconstruction</li>
          <li>overkill for this problem</li>
          <li>**json format** - use structured format</li>
          <li>more readable</li>
          <li>larger storage overhead</li>
          <li>slower parsing</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Edge Cases to Consider</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>**empty tree** - handle null root</li>
          <li>**single node** - serialize and deserialize correctly</li>
          <li>**unbalanced trees** - handle deep or wide trees</li>
          <li>**duplicate values** - handle repeated node values</li>
          <li>**large trees** - handle memory efficiently</li>
          <li>**malformed input** - handle invalid serialized strings</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Rust-Specific Features</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>ownership system</strong> - use{" "}
            <code>Rc&lt;RefCell&lt;&gt;&gt;</code> for shared mutable ownership
          </li>
          <li>**pattern matching** - match expressions for null handling</li>
          <li>**iterator traits** - peekable iterator for efficient parsing</li>
          <li>**error handling** - Result types for parsing operations</li>
          <li>**memory safety** - compile-time guarantees for memory management</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Lessons Learned</h3>
        <p>this problem taught me:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**tree serialization** - converting trees to strings efficiently</li>
          <li>**rust ownership** - handling shared mutable state</li>
          <li>**iterator patterns** - efficient string parsing</li>
          <li>**recursive algorithms** - tree traversal and reconstruction</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Real-World Applications</h3>
        <p>this problem has applications in:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>**data persistence** - saving tree structures to files</li>
          <li>**network transmission** - sending tree data over networks</li>
          <li>**caching systems** - serializing tree caches</li>
          <li>**configuration storage** - saving hierarchical configurations</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Conclusion</h3>
        <p>the serialize and deserialize binary tree problem is an excellent exercise in tree traversal and memory management. the key insight is using preorder traversal with null markers to create a simple yet efficient serialization format that can be easily reconstructed.</p>
        <p>you can find my complete solution on [leetcode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/1234569/serialize-and-deserialize-binary-tree-solution-by-1cbyc).</p>
        <p>---</p>
        <p>*this is part of my leetcode problem-solving series. i'm documenting my solutions to help others learn and to track my own progress.*</p>
      </section>

    </article>
  ),
};
