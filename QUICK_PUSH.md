# 🚀 Quick Push Instructions

## Option 1: Personal Access Token (Easiest - 2 minutes)

1. **Create token:** https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: "00-FR"
   - Check ✅ **repo**
   - Generate and **copy the token**

2. **Push:**
   ```bash
   git push -u origin main
   ```
   - Username: `00app`
   - Password: **paste your token** (starts with `ghp_`)

---

## Option 2: Generate SSH Key (5 minutes)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"
# Press Enter to accept default location
# Press Enter twice for no passphrase (or set one)

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Copy the output

# Add to GitHub:
# 1. Go to: https://github.com/settings/keys
# 2. Click "New SSH key"
# 3. Paste the key
# 4. Save

# Then push
git push -u origin main
```

---

## After Pushing: Set Vercel Environment Variable

1. **Vercel Dashboard:** https://vercel.com/dashboard
2. **Project:** 00-FR → **Settings** → **Environment Variables**
3. **Add:**
   - Name: `ELEVEN_API_KEY`
   - Value: `sk_b5dc943800b771512e51492039094507f607d64974001e7d`
   - Environments: ✅ Production ✅ Preview ✅ Development
4. **Save** → **Redeploy**

---

**Which method do you prefer?** Token is faster! 🔑

