# Exit immediately if a command exits with a non-zero status.
$ErrorActionPreference = "Stop"

# --- Pre-flight Checks ---

# 1. Check if inside a git repository
try {
    $null = git rev-parse --is-inside-work-tree 2>&1
} catch {
    Write-Host "Error: This script must be run inside a git repository."
    exit 1
}

# --- Main Logic ---

# 1. Stage all changes to get a list of everything that's different.
#    This respects the .gitignore file.
git add .

# 2. Check if there are any staged changes. If not, we're done.
$stagedChanges = git diff --staged --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes to commit. Working directory is clean."
    exit 0
}

# 3. Get the list of all staged files and their statuses.
#    We store this in a temporary file to safely loop over it later.
$CHANGELIST_FILE = [System.IO.Path]::GetTempFileName()
git diff --staged --name-status | Out-File -FilePath $CHANGELIST_FILE -Encoding utf8

# 4. Unstage everything. We will now stage and commit each file one by one.
git reset | Out-Null

Write-Host "Starting to commit changed files individually..."
Write-Host "---"

# 5. Loop through the changelist file.
$changelist = Get-Content $CHANGELIST_FILE
foreach ($line in $changelist) {
    if ([string]::IsNullOrWhiteSpace($line)) {
        continue
    }

    # Parse the tab-separated line
    $parts = $line -split "`t"
    $status = $parts[0]
    $from_path = $parts[1]
    $to_path = if ($parts.Length -gt 2) { $parts[2] } else { $null }

    $filepath = ""
    $action = ""
    $subject = ""
    $scope = ""
    $type = ""
    $filename = ""

    # Determine the correct action, commit type, and file paths based on the git status.
    switch -Regex ($status) {
        "^A$" {
            $filepath = $from_path
            $action = "Add"
            $type = "feat" # A new file is typically a new feature
        }
        "^(M|T)$" {
            # M = Modified, T = Type Change (e.g. file to symlink)
            $filepath = $from_path
            $action = "Update"
            $type = "fix" # A modification is often a fix or refinement
        }
        "^D$" {
            $filepath = $from_path
            $action = "Remove"
            $type = "refactor" # Removing a file is a form of refactoring
        }
        "^R" {
            # Renames are RXXX, e.g., R100
            # For renames, we need to stage both old and new paths for git to track the move.
            git add $from_path $to_path | Out-Null
            $filepath = $to_path # The "current" path is the new one
            $action = "Rename"
            $type = "refactor" # Renaming is a refactor
        }
        "^C" {
            # Copies are CXXX, e.g., C100
            $filepath = $to_path # The new file
            $action = "Copy"
            $type = "feat"
        }
        default {
            # Fallback for any other status
            $filepath = $from_path
            $action = "Modify"
            $type = "chore"
        }
    }

    # Stage the file(s) for this specific commit.
    # The 'Rename' case is handled above because it involves two paths.
    if (-not ($status -match "^R")) {
        git add $filepath | Out-Null
    }

    # Generate a conventional commit message.
    $scope = Split-Path -Parent $filepath
    if ($scope -eq "." -or [string]::IsNullOrEmpty($scope)) {
        $scope = "root"
    }

    # Create a descriptive subject line.
    if ($status -match "^R") {
        # Special case for renames to be more descriptive.
        $old_filename = Split-Path -Leaf $from_path
        $new_filename = Split-Path -Leaf $to_path
        $subject = "$type($scope): $action $old_filename to $new_filename"
    } elseif ($status -match "^C") {
        # Special case for copies.
        $original_filename = Split-Path -Leaf $from_path
        $new_filename = Split-Path -Leaf $to_path
        $subject = "$type($scope): $action $original_filename to $new_filename"
    } else {
        $filename = Split-Path -Leaf $filepath
        $subject = "$type($scope): $action $filename"
    }

    # Perform the commit, hiding the default git output for cleaner script output.
    git commit -m $subject | Out-Null

    Write-Host "✅ Committed: $subject"
}

# --- Cleanup ---

# Remove the temporary file.
Remove-Item $CHANGELIST_FILE -Force

Write-Host "---"
Write-Host "All changed files have been committed individually."

