#!/usr/bin/env bash
set -e

echo "Building GSSS 52 LNP Portal for production..."
npm run build
touch dist/.nojekyll
cp dist/index.html dist/404.html

echo "Packaging dist directory for gh-pages..."
INDEX_FILE="$(pwd)/.git/gh_pages_deploy_index"
rm -f "$INDEX_FILE"
GIT_INDEX_FILE="$INDEX_FILE" git --work-tree=dist add -A
TREE=$(GIT_INDEX_FILE="$INDEX_FILE" git write-tree)
rm -f "$INDEX_FILE"

PARENT=$(git rev-parse origin/gh-pages 2>/dev/null || echo "")
if [ -n "$PARENT" ]; then
  COMMIT=$(git commit-tree "$TREE" -p "$PARENT" -m "Deploy to GitHub Pages: GSSS 52 LNP")
else
  COMMIT=$(git commit-tree "$TREE" -m "Deploy to GitHub Pages: GSSS 52 LNP")
fi

git branch -f gh-pages "$COMMIT"
echo "Pushing gh-pages..."
git push origin gh-pages:gh-pages

echo "Successfully deployed to GitHub Pages!"

