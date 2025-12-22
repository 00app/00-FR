# Push with Personal Access Token

Since GitHub CLI isn't installed, use a Personal Access Token:

## Step 1: Create Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "00-FR Push"
4. Select scope: ✅ **repo** (all repo permissions)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

## Step 2: Push with Token

Run this command (replace YOUR_TOKEN with your actual token):

```bash
git push https://YOUR_TOKEN@github.com/00app/00-FR.git main
```

Or set it as a credential helper:

```bash
git config --global credential.helper store
git push -u origin main
# When prompted:
# Username: 00app
# Password: [paste your token]
```

---

**Alternative: Install GitHub CLI**

```bash
# Install Homebrew first (if not installed):
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install GitHub CLI:
brew install gh
gh auth login
git push -u origin main
```

