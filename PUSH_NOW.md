# 🚀 Push Code to GitHub - Quick Guide

Your code is ready to push! Here are 3 easy ways:

## Option 1: GitHub CLI (Easiest)

```bash
# Install GitHub CLI if you don't have it
brew install gh

# Authenticate
gh auth login

# Push
git push -u origin main
```

## Option 2: Personal Access Token

1. **Create a token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name it: "00-FR Push"
   - Select scope: `repo`
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push using token:**
   ```bash
   git push -u origin main
   ```
   - Username: `00app`
   - Password: **paste your token here**

## Option 3: GitHub Desktop

1. Download: https://desktop.github.com
2. Sign in with your GitHub account
3. File → Add Local Repository → Select `/Users/lomi_02/Documents/00-FR`
4. Click "Push origin"

---

## ⚠️ After Pushing: Set Environment Variable in Vercel

**CRITICAL:** TTS won't work without this!

1. Go to: https://vercel.com/dashboard
2. Click project: **00-FR**
3. Settings → Environment Variables
4. Add:
   - **Name:** `ELEVEN_API_KEY`
   - **Value:** `sk_b5dc943800b771512e51492039094507f607d64974001e7d`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
5. Click **Save**
6. Go to **Deployments** → Click **"..."** → **Redeploy**

---

## ✅ Verify

After pushing and setting the env var:

1. Wait 1-2 minutes for Vercel to rebuild
2. Visit: https://00fr.vercel.app/day/1
3. Click "play lesson"
4. Audio should work! 🎧

---

**Current Status:**
- ✅ Code committed locally
- ⏳ Waiting to push to GitHub
- ⏳ Waiting to set env var in Vercel

