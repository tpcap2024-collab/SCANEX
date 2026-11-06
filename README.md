# SCANEX

Smart Scanning & Delivery Verification System

**Slogan:** Scan Smart. Deliver Right.

## Local development

```powershell
$env:Path="D:\node-v26.13.0-win-x64;$env:Path"
$env:NODE_USE_SYSTEM_CA="1"
npm.cmd install
npm.cmd run dev
```

## Build

```powershell
npm.cmd run build
npm.cmd run preview
```

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all files and folders in this project to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to the `main` branch or run the workflow manually from **Actions**.
