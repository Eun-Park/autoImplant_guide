# E=mc2 Biotech - AutoImplant Guide

Automated Implant Guide Design System

## Live Demo

- **Landing Page**: [https://implant-web.vercel.app](https://implant-web.vercel.app)
- **3D Demo**: [https://implant-web.vercel.app/main](https://implant-web.vercel.app/main)

## Introduction

This is a web platform demonstrating the automated implant guide design logic of E=mc2 Biotech.

**Note: This MVP currently operates using mock data for demonstration purposes.**

### Key Features

- **Business Presentation**: Company introduction and investment pitch
- **3D Simulation**: Visualization of teeth and implant positioning
- **Real-time Algorithm**: Application of the 0.5mm lingual offset rule
- **Interactive UI**: Tooth selection and specification display

## Getting Started

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing Page
│   ├── main/
│   │   └── page.tsx          # 3D Demo Page
│   ├── layout.tsx
│   └── globals.css
├── components/               # React Components
│   ├── Scene.tsx            # 3D Scene
│   ├── ToothModel.tsx       # Tooth Model
│   ├── ImplantModel.tsx     # Implant Model
│   └── ...
└── lib/
    ├── types.ts             # TypeScript Types
    ├── constants.ts         # Constants
    └── implant-logic.ts     # Implant Logic
```

## Tech Stack

- **Framework**: Next.js 16 (React 19)
- **3D Graphics**: Three.js, React Three Fiber
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Firebase App Hosting

## Build

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Documentation](https://threejs.org/docs/)

## Deploy on Firebase App Hosting

This app is deployed via [Firebase App Hosting](https://firebase.google.com/docs/app-hosting),
which provides Git-connected, auto-deploying hosting for full-stack Next.js apps.

Runtime configuration lives in [`apphosting.yaml`](./apphosting.yaml).

### Setup

1. Push to GitHub (App Hosting reads `apphosting.yaml` from the repo).
2. In the [Firebase Console](https://console.firebase.google.com), create a project
   and upgrade to the **Blaze (pay-as-you-go)** plan (required for App Hosting).
3. Go to **Build → App Hosting → Get started**, connect this GitHub repository,
   and set the live branch to `main`.
4. Firebase auto-detects Next.js, builds, and deploys. Every push to `main`
   triggers an automatic redeploy.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

(c) 2025 E=mc2 Biotech. All rights reserved.
