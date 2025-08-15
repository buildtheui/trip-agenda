# Euro Trip Calendar - Vercel Deployment Guide

This project has been configured as a Single Page Application (SPA) and is ready for deployment to Vercel.

## 🚀 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel will automatically detect the React Router setup
5. Deploy with these settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Method 2: Vercel CLI

1. Install Vercel CLI: `npm install -g vercel`
2. Build the project: `npm run build`
3. Run: `vercel --prod`
4. Follow the prompts to deploy

### Method 3: Manual Upload

1. Build the project: `npm run build`
2. Go to [vercel.com](https://vercel.com) and drag & drop the `dist` folder

## 📦 Build Commands

- `npm run build` - Builds the SPA and copies files to `dist/`
- `npm run preview` - Preview the built SPA locally

## 📁 Build Output

After running `npm run build`, the `dist/` folder contains:

- `index.html` - Main SPA entry point
- `assets/` - Bundled CSS, JS, and other assets
- `favicon.ico` - App icon

## 🔧 Configuration Files

- `react-router.config.ts` - Configured for SPA mode (`ssr: false`)
- `vite.config.ts` - Optimized for SPA builds with code splitting
- `vercel.json` - Vercel deployment configuration with SPA routing

## ⚙️ Vercel Configuration

The `vercel.json` file is already configured to handle SPA routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures that all routes are handled by your React Router application.

## 🔍 Testing Locally

1. Build the project: `npm run build`
2. Preview locally: `npm run preview`
3. Open your browser to the displayed URL (usually http://localhost:4173)

## 📝 Notes

- The app is now a pure client-side SPA with no server-side rendering
- All routing is handled client-side by React Router
- The build is optimized with code splitting for better performance
- Static assets are fingerprinted for optimal caching

## 🐛 Troubleshooting

### Routing Issues

If you encounter 404 errors when refreshing pages:

- Ensure the `vercel.json` file is in your project root
- Verify that Vercel is using the correct build settings

### Build Issues

If the build fails:

- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run typecheck`
- Make sure you're using Node.js version 18 or higher

### Vercel-Specific Issues

- **Build fails**: Check the build logs in Vercel dashboard
- **Environment variables**: Set them in Vercel project settings
- **Custom domain**: Configure in Vercel project settings

## 🚀 Performance Features

The build includes:

- Code splitting for optimal loading
- Asset optimization and minification
- Tree shaking for smaller bundles
- Automatic static optimization by Vercel
