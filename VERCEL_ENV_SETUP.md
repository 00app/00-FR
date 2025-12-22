# 🚀 Set Vercel Environment Variable

## Option 1: Vercel Dashboard (Easiest - 2 minutes)

1. **Go to:** https://vercel.com/dashboard
2. **Click project:** 00-FR (or search for it)
3. **Go to:** Settings → Environment Variables
4. **Click:** "Add New"
5. **Fill in:**
   - **Key:** `ELEVEN_API_KEY`
   - **Value:** `sk_b5dc943800b771512e51492039094507f607d64974001e7d`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
6. **Click:** "Save"
7. **Redeploy:**
   - Go to **Deployments** tab
   - Click **"..."** on the latest deployment
   - Click **"Redeploy"**

---

## Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Set environment variable
vercel env add ELEVEN_API_KEY production
# When prompted, paste: sk_b5dc943800b771512e51492039094507f607d64974001e7d

vercel env add ELEVEN_API_KEY preview
# Same value

vercel env add ELEVEN_API_KEY development
# Same value

# Redeploy
vercel --prod
```

---

## Option 3: Vercel API (Advanced)

If you have a Vercel API token:

```bash
# Set env var via API
curl -X POST "https://api.vercel.com/v10/projects/prj_Ps0CwaLPqwyZeME64Bnjyl2kuNqs/env" \
  -H "Authorization: Bearer YOUR_VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "key": "ELEVEN_API_KEY",
    "value": "sk_b5dc943800b771512e51492039094507f607d64974001e7d",
    "type": "encrypted",
    "target": ["production", "preview", "development"]
  }'
```

---

## ✅ Verify

After setting the env var and redeploying:

1. Wait 1-2 minutes for rebuild
2. Visit: https://00fr.vercel.app/day/1
3. Click "play lesson"
4. Audio should work! 🎧

---

**Project ID:** `prj_Ps0CwaLPqwyZeME64Bnjyl2kuNqs`

