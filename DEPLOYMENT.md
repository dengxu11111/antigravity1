# Deployment Guide

Vercel is built by the same team that created Next.js, so it is the best choice for deploying this project. 

Follow these steps to deploy your Antigravity marketing website:

## 1. Push Code to GitHub

First, you need to push your local repository to a new remote repository on GitHub.

Open your terminal in the project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Ready for deployment"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

*(Note: Replace the GitHub URL with the link to your newly created empty repository).*

## 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in with your GitHub account.
2. Click **Add New...** and select **Project**.
3. You will see a list of your GitHub repositories. Find the one you just pushed and click **Import**.

## 3. Deploy

1. Vercel will automatically detect that this is a **Next.js** framework project and configure the correct build settings (e.g., `npm run build`).
2. You do not need to change any configuration settings. Simply click the **Deploy** button.
3. Your site will build and be live in **under two minutes**.

## 4. Domains & Pricing

- **Free Domain**: You will immediately get a free domain similar to `yourproject.vercel.app`.
- **Custom Domain**: You can add your own custom domain (e.g., `www.yourcompany.com`) directly in the Vercel project dashboard under **Settings > Domains**.
- **Pricing**: Vercel is always **free** for personal projects and small traffic sites. If you need to upgrade for a team, paid Pro plans start at **$20 per month**.
