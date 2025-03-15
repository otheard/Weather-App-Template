#!/bin/sh
# Check the current branch
current_branch=$(git branch --show-current)

# If the current branch is not 'main', create and switch to 'main'
if [ "$current_branch" != "main" ]; then
  git checkout -b main
fi

# Push to the 'main' branch
git push -u origin main
