# 🔧 Fix Deployment - Set Environment Variable

## Current Status
- ✅ Code pushed to GitHub
- ✅ Vercel deployment: **Ready** (2 minutes ago)
- ⚠️ **TTS won't work until environment variable is set**

## The Problem

Your site is deployed, but the TTS API will return:
```
Error: Missing ELEVEN_API_KEY
```

This happens because Vercel doesn't have the API key set.

---

## ✅ Solution: Set Environment Variable

### Step-by-Step:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click on project: **00-FR**

2. **Navigate to Environment Variables**
   - Click **Settings** (in the top menu)
   - Click **Environment Variables** (in the left sidebar)

3. **Add the Variable**
   - Click **"Add New"** button
   - **Key:** `ELEVEN_API_KEY`
   - **Value:** `sk_b5dc943800b771512e51492039094507f607d64974001e7d`
   - **Environments:** Check all three:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
   - Click **"Save"**

4. **Redeploy**
   - Go to **Deployments** tab
   - Find the latest deployment (the one that says "Ready")
   - Click the **"..."** menu (three dots)
   - Click **"Redeploy"**
   - Confirm the redeploy

5. **Wait for Rebuild**
   - Vercel will rebuild (usually 1-2 minutes)
   - You'll see the status change to "Building" then "Ready"

---

## ✅ Test After Redeploy

1. **Visit:** https://00fr.vercel.app/day/1
2. **Click:** "play lesson" button
3. **Expected:** Audio should play! 🎧

If you see an error, check:
- Browser console (F12 → Console tab)
- Vercel function logs (Deployments → Functions → /api/tts)

---

## 🔍 Verify Environment Variable is Set

After adding it, you should see:
- `ELEVEN_API_KEY` listed in Environment Variables
- It shows for all three environments (Production, Preview, Development)

---

## ⚠️ Common Issues

### "Missing ELEVEN_API_KEY" error
→ Environment variable not set or not redeployed

### Site loads but TTS button does nothing
→ Check browser console for errors

### Build fails after adding env var
→ Check Vercel build logs for errors

---

**Once you set the env var and redeploy, TTS will work!** 🚀

