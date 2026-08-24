#!/bin/bash
# =====================================================
# 8 Meter Mafia — GitHub + GitHub Pages Setup Script
# Run this from the 8-meter-mafia folder
# Requires: git, gh (GitHub CLI)
# =====================================================

set -e

echo "🏒 Setting up 8 Meter Mafia on GitHub..."

# 1. Create the repo
echo "→ Creating GitHub repository..."
gh repo create 8-meter-mafia \
  --public \
  --description "8 Meter Mafia — Girls & Women's Lacrosse Lifestyle Brand" \
  --source=. \
  --remote=origin \
  --push

# 2. Enable GitHub Pages via GitHub Actions
echo "→ Enabling GitHub Pages..."
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/$(gh api user --jq .login)/8-meter-mafia/pages \
  -f source='{"branch":"main","path":"/"}' 2>/dev/null || true

# Enable the Actions-based Pages source
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/$(gh api user --jq .login)/8-meter-mafia/pages \
  -f build_type='workflow' 2>/dev/null || true

USERNAME=$(gh api user --jq .login)
echo ""
echo "✅ Done! Your site will be live at:"
echo "   https://${USERNAME}.github.io/8-meter-mafia"
echo ""
echo "   (GitHub Actions is deploying now — usually takes 1-2 minutes)"
echo "   Check progress: https://github.com/${USERNAME}/8-meter-mafia/actions"
