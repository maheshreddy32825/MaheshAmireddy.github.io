# 🐙 GitHub Integration Guide

Your portfolio **dynamically fetches your GitHub pinned repos** and displays them on the projects page. No manual updates needed!

---

## ✅ How It Works

1. **You pin repos** on your GitHub profile
2. **Portfolio fetches them** automatically via GitHub GraphQL API
3. **Displays on projects page** with stars, language, description
4. **Auto-updates** within 5 minutes of pinning

---

## 🔧 Setup (Already Configured!)

### Local Development

Your `.env.local` already has:
```env
GITHUB_TOKEN=[Your GitHub Personal Access Token]
GITHUB_USERNAME=maheshreddy32825
```

### Production (Vercel)

**Already configured!** Same variables are set in Vercel Environment Variables.

---

## 📌 How to Manage Your Projects

### Pin Repos on GitHub

1. Go to: https://github.com/maheshreddy32825?tab=repositories
2. Find a repo you want to feature
3. Click the **⭐ Star/Pin icon** in repo details
4. Drag to reorder your 6 pinned repos

### How Many Repos Can Display?

- **Pinned capacity**: Up to 6 repos
- **Portfolio shows**: Up to 6 pinned repos
- **Update time**: Within 5 minutes of pinning

### What Gets Displayed

For each pinned repo:
- 📦 Repository name (linked to repo)
- 📝 Description
- 🌐 Primary programming language
- ⭐ Star count
- 📅 Last updated date
- 🔗 Direct GitHub link

---

## 🚨 If GitHub Repos Aren't Showing

### Step 1: Verify Token

Check `.env.local` has:
```
GITHUB_TOKEN=[Your GitHub Personal Access Token]
GITHUB_USERNAME=maheshreddy32825
```

### Step 2: Verify Token is Valid

1. Go to: https://github.com/settings/tokens
2. Find your token
3. Check if it's expired (should show ✓ Active)
4. Check scopes include: `public_repo`

### Step 3: Verify Repos Are Pinned

1. Go to: https://github.com/maheshreddy32825
2. Scroll to "Pinned" section
3. Should show 6 repos
4. If not, pin some repos first

### Step 4: Check Vercel Setup

1. Vercel Dashboard → Project Settings
2. Environment Variables
3. Verify both variables are set:
   - `GITHUB_TOKEN`
   - `GITHUB_USERNAME`
4. Trigger redeploy:
   - Click "Redeploy" button
   - Wait 5 minutes

### Step 5: Local Test

```bash
npm run build
npm run preview
```

Open http://localhost:3000/projects
Should show your pinned repos

---

## 🔑 Generate New GitHub Token

If your token expired or you need a new one:

### Step 1: Create Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Token name: `mahesh-portfolio`
4. Expiration: 90 days (or No expiration)
5. Scopes: Check **`public_repo`**
6. Click **"Generate token"**

### Step 2: Copy Token

- **Copy immediately!** You can't view it again
- If you lose it, delete and create a new one

### Step 3: Update Locally

Edit `.env.local`:
```
GITHUB_TOKEN=ghp_NEW_TOKEN_HERE
```

### Step 4: Update Vercel

1. Vercel Dashboard → Settings → Environment Variables
2. Find: `GITHUB_TOKEN`
3. Click edit (pencil icon)
4. Paste new token
5. Click "Save"
6. Click "Redeploy"

### Step 5: Delete Old Token

1. Go to: https://github.com/settings/tokens
2. Find old token
3. Click **"Delete"**
4. Confirm deletion

---

## 📊 Display Customization

### Change Number of Repos Shown

Edit: `src/pages/projects.astro`

```typescript
// Line ~15
const pinnedRepos = await getPinnedRepos(6);  // Change 6 to desired number
```

### Change Repo Card Styling

Edit: `src/pages/projects.astro`

```astro
<!-- Find the .map() section that renders repos -->
<!-- Customize the card HTML/styling -->
```

---

## 🔐 Security Notes

### Protect Your Token

- ✅ Never commit `.env.local` (it's in `.gitignore`)
- ✅ Never paste token in commits or docs
- ✅ Regenerate token if accidentally exposed
- ❌ Don't share token with anyone

### What Your Token Can Access

With `public_repo` scope:
- Read public repo information
- Read pinned repos
- Read repo metadata (stars, language, description)

It **cannot**:
- Access private repos
- Push code
- Delete repos
- Access issues/PRs

---

## 🧪 Testing

### Local Test

```bash
npm run dev
# Visit http://localhost:3000/projects
# Should show your pinned repos
```

### Vercel Test

1. After redeploy, visit: https://maheshamireddy-portfolio.vercel.app/projects
2. Should show pinned repos
3. Check browser console (F12) for errors

### GitHub API Test (Advanced)

```bash
# Test if token works
curl -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/user/repos
```

---

## 📝 Common Tasks

| Task | How |
|------|-----|
| **Add repo to display** | Pin on GitHub profile |
| **Remove repo from display** | Unpin on GitHub profile |
| **Reorder repos** | Drag pinned repos on GitHub |
| **Update repo description** | Edit on GitHub, waits 5 min |
| **Refresh repos manually** | Trigger Vercel redeploy |

---

## 🆘 Troubleshooting

### Repos show "GitHub credentials not configured"
- Check `.env.local` has both GITHUB_TOKEN and GITHUB_USERNAME
- Restart dev server: `npm run dev`
- Check token is valid (hasn't expired)

### Repos show but old/stale data
- Changes take up to 5 minutes
- To force update: trigger Vercel redeploy
- Or run locally: `npm run build`

### Only some repos show
- You can pin max 6 repos
- If you pin more than 6, the 7th+ don't display
- Check you have exactly 6 pinned

### Repos don't match what I pinned
- Refresh page with Cmd+Shift+R
- Wait 5 minutes for sync
- Check repo is "pinned" not just "starred"

---

## 💡 Pro Tips

1. **Pin your best work** - These repos are featured prominently
2. **Update repo descriptions** - Portfolio shows them on cards
3. **Keep repos organized** - Good READMEs help
4. **Pin diverse projects** - Show range of skills
5. **Regular token rotation** - Regenerate every 90 days for security

---

Last Updated: December 26, 2025


---

## 🔄 How It Works

1. **Build time:** Portfolio fetches your 4-6 pinned repos from GitHub
2. **Auto-sync:** When you pin/unpin repos, next build gets the latest
3. **Fallback:** If API fails, shows static projects instead

---

## ✨ Features

- ✅ Real-time sync with GitHub
- ✅ Supports up to 6 pinned repos
- ✅ Shows language, stars, descriptions
- ✅ Direct links to repos
- ✅ Graceful fallback on API errors
- ✅ Secure token handling
