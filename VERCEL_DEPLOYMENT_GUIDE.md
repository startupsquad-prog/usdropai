# 🚀 Vercel Deployment Guide - USDrop.Ai

## ✅ Code Successfully Pushed to GitHub!

Your code has been pushed to: **https://github.com/startupsquad-prog/usdropai.git**

---

## 📦 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Go to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account

#### Step 2: Import Project
1. Click **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. Find `startupsquad-prog/usdropai` in your repositories
4. Click **"Import"**

#### Step 3: Configure Project
1. **Framework Preset:** Next.js (auto-detected)
2. **Root Directory:** `./` (leave as default)
3. **Build Command:** `pnpm build` (auto-detected)
4. **Output Directory:** `.next` (auto-detected)
5. **Install Command:** `pnpm install` (auto-detected)

#### Step 4: Add Environment Variables
Click **"Environment Variables"** and add these **3 variables**:

```env
# Required Variables
NEXT_PUBLIC_SUPABASE_URL=https://kvmwcrmnszsfhapwzzdp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bXdjcm1uc3pzZmhhcHd6emRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3MzA5NTEsImV4cCI6MjA3NTMwNjk1MX0.FulPOsgSvZSg57L_L9K4sC4ZwOI-Ri2feKTip5W-3pg
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
```

> **Note:** Update `NEXT_PUBLIC_SITE_URL` after deployment with your actual Vercel URL

#### Step 5: Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

---

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
pnpm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
# From project root
vercel

# Follow prompts:
# - Link to existing project? No
# - What's your project's name? usdropai
# - In which directory is your code? ./
# - Want to override settings? No
```

#### Step 4: Set Environment Variables
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add NEXT_PUBLIC_SITE_URL production
```

#### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## 🔗 Link GitHub to Vercel (Auto-Deploy)

### Step 1: Go to Project Settings
1. Open your project in Vercel Dashboard
2. Go to **Settings** → **Git**

### Step 2: Connect Repository
1. **GitHub Repository:** Should already be connected
2. **Production Branch:** `main`
3. **Deploy Hooks:** Enabled by default

### Step 3: Configure Auto-Deploy
✅ **Enabled:** Deploy every push to `main` branch
✅ **Preview Deployments:** Deploy every PR automatically

**Now every push to GitHub will automatically deploy to Vercel!**

---

## 🔄 Update Site URL After Deployment

After your first deployment:

1. Copy your Vercel URL (e.g., `https://usdropai.vercel.app`)
2. Go to **Project Settings** → **Environment Variables**
3. Edit `NEXT_PUBLIC_SITE_URL` to your actual URL
4. Click **"Save"**
5. Redeploy (click **"Redeploy"** in Deployments tab)

---

## 🔧 Update Supabase Redirect URLs

### Step 1: Go to Supabase Dashboard
1. Visit [supabase.com](https://supabase.com)
2. Open your project

### Step 2: Update Authentication URLs
1. Go to **Authentication** → **URL Configuration**
2. Add to **Redirect URLs:**
   ```
   http://localhost:3001/auth/callback
   https://your-project-name.vercel.app/auth/callback
   ```
3. Update **Site URL:**
   ```
   https://your-project-name.vercel.app
   ```
4. Click **"Save"**

---

## 📊 Verify Deployment

### Check These Pages:
- ✅ **Homepage:** `https://your-domain.vercel.app`
- ✅ **Signup:** `https://your-domain.vercel.app/auth/signup`
- ✅ **Login:** `https://your-domain.vercel.app/auth/login`
- ✅ **Dashboard:** `https://your-domain.vercel.app/dashboard`
- ✅ **AI Discovery:** `https://your-domain.vercel.app/dashboard/ai-discovery`

### Check Functionality:
- ✅ Images load correctly
- ✅ Supabase connection works
- ✅ Authentication flow works
- ✅ Product cards display data
- ✅ Typing animation works on product details

---

## 🎨 Custom Domain (Optional)

### Step 1: Add Domain
1. Go to **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `usdrop.ai`)

### Step 2: Configure DNS
Add these records to your DNS provider:

**A Record:**
```
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait for Verification
- Vercel will automatically issue SSL certificate
- Domain will be live in 5-10 minutes

---

## 🐛 Troubleshooting

### Build Errors

**Issue:** `Module not found` errors
**Fix:** Make sure all dependencies are in `package.json`
```bash
pnpm install
git add package.json pnpm-lock.yaml
git commit -m "fix: update dependencies"
git push
```

**Issue:** `Type errors` during build
**Fix:** Check TypeScript errors locally first
```bash
pnpm build
```

### Runtime Errors

**Issue:** Images not loading
**Fix:** Check `next.config.ts` has correct image domains
```typescript
images: {
  remotePatterns: [
    { hostname: 'images.unsplash.com' },
    { hostname: 'picsum.photos' },
  ]
}
```

**Issue:** Supabase connection fails
**Fix:** Verify environment variables in Vercel dashboard

### Authentication Issues

**Issue:** Callback redirect fails
**Fix:** Update Supabase redirect URLs (see above)

**Issue:** "Invalid session" errors
**Fix:** Clear cookies and try again

---

## 📈 Performance Optimization

### Enable Analytics
1. Go to **Analytics** tab in Vercel
2. Enable **Web Analytics**
3. Track page views, performance, and user behavior

### Enable Speed Insights
1. Go to **Speed Insights** tab
2. Monitor Core Web Vitals
3. Optimize based on recommendations

### Configure Caching
Vercel automatically caches:
- ✅ Static pages
- ✅ Images (via Image Optimization)
- ✅ API routes (configurable)

---

## 🔐 Security Best Practices

### Environment Variables
- ✅ **Never commit `.env.local`** to GitHub
- ✅ Use Vercel's environment variable manager
- ✅ Use different keys for production vs development

### Supabase Security
- ✅ Enable Row Level Security (RLS) on all tables
- ✅ Use service role key only in server-side code
- ✅ Restrict API access by domain

---

## 📚 Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Supabase + Vercel:** [supabase.com/docs/guides/hosting/vercel](https://supabase.com/docs/guides/hosting/vercel)

---

## ✅ Deployment Checklist

- [x] Code pushed to GitHub
- [ ] Project created on Vercel
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] Site URL updated
- [ ] Supabase redirect URLs configured
- [ ] Homepage loads correctly
- [ ] Authentication works
- [ ] Dashboard accessible
- [ ] Product data displays
- [ ] Images load properly
- [ ] Custom domain configured (optional)

---

## 🎉 You're Live!

Your USDrop.Ai application is now deployed and accessible worldwide!

**Next Steps:**
1. Share your Vercel URL with your team
2. Test all features in production
3. Monitor analytics and performance
4. Set up custom domain if desired

**Need Help?**
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Repository: [github.com/startupsquad-prog/usdropai](https://github.com/startupsquad-prog/usdropai)

