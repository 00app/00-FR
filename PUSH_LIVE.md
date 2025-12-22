# 🚀 Push Live - Final Steps

Your app is already deployed on Vercel at:
- **Live URL**: https://00fr.vercel.app
- **GitHub**: https://github.com/00app/00-FR

## ⚠️ CRITICAL: Set Environment Variables in Vercel

**The TTS won't work until you add the API key!**

### Steps:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click on your project: **00-FR**

2. **Add Environment Variable**
   - Go to: **Settings** → **Environment Variables**
   - Click **"Add New"**
   - Add:
     ```
     Name: ELEVEN_API_KEY
     Value: sk_b5dc943800b771512e51492039094507f607d64974001e7d
     ```
   - Select environments: **Production**, **Preview**, **Development**
   - Click **"Save"**

3. **Redeploy**
   - Go to **Deployments** tab
   - Click the **"..."** menu on the latest deployment
   - Click **"Redeploy"**
   - OR: Push a new commit to trigger auto-deploy

---

## 📤 Push Latest Code to GitHub

Your local code has the ElevenLabs TTS implementation. Push it:

```bash
# Push to GitHub (you'll need to authenticate)
git push -u origin main
```

**If you get authentication errors:**

### Option 1: Use GitHub CLI
```bash
gh auth login
git push -u origin main
```

### Option 2: Use SSH (if you have SSH keys set up)
```bash
git remote set-url origin git@github.com:00app/00-FR.git
git push -u origin main
```

### Option 3: Use Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Create a token with `repo` permissions
3. When prompted for password, use the token instead

---

## ✅ Verify Deployment

After pushing and setting environment variables:

1. **Wait for Vercel to rebuild** (usually 1-2 minutes)
2. **Visit**: https://00fr.vercel.app/day/1
3. **Click**: "play lesson"
4. **Verify**: Audio plays correctly

---

## 🔍 Troubleshooting

### TTS Not Working on Live Site?

1. **Check Vercel Environment Variables**
   - Go to Settings → Environment Variables
   - Verify `ELEVEN_API_KEY` is set
   - Make sure it's enabled for **Production**

2. **Check Vercel Function Logs**
   - Go to Deployments → Click on latest deployment
   - Click "Functions" tab
   - Check `/api/tts` logs for errors

3. **Verify API Key**
   - Make sure the key is correct: `sk_b5dc943800b771512e51492039094507f607d64974001e7d`
   - Check ElevenLabs dashboard for usage

### Build Fails?

- Check Vercel build logs
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally first

---

## 🎉 Success Checklist

- [ ] Code pushed to GitHub
- [ ] `ELEVEN_API_KEY` set in Vercel
- [ ] Vercel deployment successful
- [ ] Live site loads: https://00fr.vercel.app
- [ ] TTS works on `/day/1` page
- [ ] Audio plays correctly

---

**Once all steps are complete, your app will be live with working TTS!** 🎧

