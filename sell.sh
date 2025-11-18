#!/bin/sh

set -e

if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: This script must be run inside a git repository."
    exit 1
fi

git add .

if git diff --staged --quiet; then
    echo "No changes to commit. Working directory is clean."
    exit 0
fi

CHANGELIST_FILE=$(mktemp)
git diff --staged --name-status > "$CHANGELIST_FILE"

git reset > /dev/null

echo "Starting to commit changed files individually..."
echo "---"

while IFS=$'\t' read -r status from_path to_path; do
    filepath=""
    action=""
    subject=""
    scope=""
    type=""
    filename=""

    case "$status" in
        A)
            filepath="$from_path"
            action="Add"
            type="feat"
            ;;
        M|T)
            filepath="$from_path"
            action="Update"
            type="fix"
            ;;
        D)
            filepath="$from_path"
            action="Remove"
            type="refactor"
            ;;
        R*)
            git add "$from_path" "$to_path"
            filepath="$to_path"
            action="Rename"
            type="refactor"
            ;;
        C*)
            filepath="$to_path"
            action="Copy"
            type="feat"
            ;;
        *)
            filepath="$from_path"
            action="Modify"
            type="chore"
            ;;
    esac

    if ! [[ "$status" =~ ^R.* ]]; then
        git add "$filepath"
    fi

    scope=$(dirname "$filepath")
    if [ "$scope" = "." ]; then
        scope="root"
    fi

    if [[ "$status" =~ ^R.* ]]; then
        old_filename=$(basename "$from_path")
        new_filename=$(basename "$to_path")
        subject="$type($scope): $action $old_filename to $new_filename"
    elif [[ "$status" =~ ^C.* ]]; then
        original_filename=$(basename "$from_path")
        new_filename=$(basename "$to_path")
        subject="$type($scope): $action $original_filename to $new_filename"
    else
        filename=$(basename "$filepath")
        subject="$type($scope): $action $filename"
    fi

    git commit -m "$subject" > /dev/null

    echo "✅ Committed: $subject"

done < "$CHANGELIST_FILE"

rm "$CHANGELIST_FILE"

echo "---"
echo "All changed files have been committed individually."
