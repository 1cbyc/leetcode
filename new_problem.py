import os
import sys
import shutil
from pathlib import Path

def create_problem_directory(language: str, problem_name: str):
    dir_name = problem_name.lower().replace(' ', '-').replace('_', '-')

    lang_paths = {
        'typescript': 'TypeScript',
        'python': 'Python',
        'c': 'C'
    }

    if language.lower() not in lang_paths:
        print(f"Error: Unsupported language '{language}'. Use: typescript, python, or c")
        return False

    base_path = lang_paths[language.lower()]
    problem_path = os.path.join(base_path, dir_name)

    os.makedirs(problem_path, exist_ok=True)

    template_files = {
        'typescript': 'template.ts',
        'python': 'template.py',
        'c': 'template.c'
    }

    solution_files = {
        'typescript': 'solution.ts',
        'python': 'solution.py',
        'c': 'solution.c'
    }

    template_src = os.path.join(base_path, template_files[language.lower()])
    solution_dst = os.path.join(problem_path, solution_files[language.lower()])

    if os.path.exists(template_src):
        shutil.copy2(template_src, solution_dst)

        with open(solution_dst, 'r') as f:
            content = f.read()

        content = content.replace('[Problem Name]', problem_name.lower())
        content = content.replace('[LeetCode URL]', f'https://leetcode.com/problems/{dir_name}/')

        with open(solution_dst, 'w') as f:
            f.write(content)

        print(f"Created problem: {problem_path}")
        print(f"Solution file: {solution_dst}")
        print(f"Language: {language.title()}")
    else:
        print(f"Template not found: {template_src}")
        return False

    return True

def main():
    if len(sys.argv) < 3:
        print("Usage: python new_problem.py <language> <problem_name>")
        print("\nLanguages: typescript, python, c")
        print("Example: python new_problem.py python 'Two Sum'")
        return

    language = sys.argv[1]
    problem_name = ' '.join(sys.argv[2:])

    success = create_problem_directory(language, problem_name)

    if success:
        print("\nReady to start coding!")
        print("Tip: Update the difficulty level and description in your solution file")
    else:
        print("\nFailed to create problem directory")

if __name__ == "__main__":
    main()
