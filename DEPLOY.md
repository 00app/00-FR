# 🚀 Deployment Guide - Push Live

## Quick Deploy to Vercel (Easiest - Recommended)

### Step 1: Test Build Locally

First, make sure everything builds:

```bash
npm run build
```

If build succeeds, you're ready to deploy!

### Step 2: Push to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Add ElevenLabs TTS integration"

# Create a GitHub repo, then:
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Vercel will auto-detect Next.js** ✅

### Step 4: Add Environment Variables

**CRITICAL:** In Vercel dashboard → Your Project → Settings → Environment Variables, add:

```
ELEVEN_API_KEY=sk_b5dc943800b771512e51492039094507f607d64974001e7d
DATABASE_URL=file:./dev.db
```

**Important Notes:**
- For production, SQLite (`file:./dev.db`) might not work on Vercel
- Consider using a cloud database (Neon, Supabase, etc.) for production
- Or use Vercel's built-in database options

### Step 5: Deploy!

Click **"Deploy"** - Vercel will:
- ✅ Build your app automatically
- ✅ Deploy it
- ✅ Give you a live URL (like `your-app.vercel.app`)

### Step 6: Test Live Site

1. Visit your live URL
2. Go to `/day/1`
3. Click "play lesson"
4. Test the voice functionality

---

## Alternative: Deploy to Other Platforms

### Railway
1. Connect GitHub repo at [railway.app](https://railway.app)
2. Add environment variables
3. Deploy

### Netlify
1. Connect GitHub repo at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### Render
1. Connect GitHub repo at [render.com](https://render.com)
2. Select "Web Service"
3. Build command: `npm run build`
4. Start command: `npm start`
5. Add environment variables

---

## Pre-Deployment Checklist

- [x] ✅ TTS working locally with ElevenLabs
- [ ] Test build: `npm run build`
- [ ] Set `ELEVEN_API_KEY` in production environment
- [ ] Update `DATABASE_URL` for production (if needed)
- [ ] Push code to GitHub
- [ ] Deploy to Vercel/your platform
- [ ] Test live site

---

## Production Environment Variables

Make sure these are set in your deployment platform:

```
ELEVEN_API_KEY=sk_b5dc943800b771512e51492039094507f607d64974001e7d
DATABASE_URL=file:./dev.db
```

**For Production Database:**
If you want to use a cloud database instead of SQLite:

1. **Neon** (PostgreSQL - Free tier available):
   - Go to [neon.tech](https://neon.tech)
   - Create project
   - Copy connection string
   - Update `DATABASE_URL` in Vercel

2. **Supabase** (PostgreSQL - Free tier available):
   - Go to [supabase.com](https://supabase.com)
   - Create project
   - Copy connection string
   - Update `DATABASE_URL` in Vercel

---

## Post-Deployment

1. ✅ Visit your live URL
2. ✅ Test the voice functionality
3. ✅ Check Vercel logs for any errors
4. ✅ Monitor ElevenLabs usage dashboard

---

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally first

### TTS Not Working on Live Site
- Check `ELEVEN_API_KEY` is set in Vercel environment variables
- Check Vercel function logs
- Verify ElevenLabs API key is valid

### Database Issues
- SQLite might not work on serverless platforms
- Switch to cloud database (Neon/Supabase) for production

---

**Ready to deploy? Follow the steps above!** 🚀
