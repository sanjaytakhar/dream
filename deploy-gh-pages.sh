#!/usr/bin/env bash
set -e

echo "Building GSSS 52 LNP Portal for production..."
npm run build

echo "Deploying dist directory to gh-pages branch..."
git checkout -B gh-pages
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages: GSSS 52 LNP" || true
echo "gh-pages branch is ready!"
echo "Now run: git push -u origin gh-pages --force"
git checkout main
