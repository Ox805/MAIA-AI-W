# Maia Technologies Corporate Website

This is the official corporate website for Maia Technologies, an AI innovation lab building tomorrow's AI-powered businesses.

## About Maia Technologies

Maia Technologies is a technology innovation lab that identifies transformative opportunities in the AI landscape and builds category-defining software products. Our flagship products include:

- **EdgeView Sports Platform** - AI-powered sports platform starting with pickleball
- **Maia Personal Assistant** - AI-powered productivity companion
- **Maia Business Assistant** - Enterprise-grade AI solutions

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: CSS3 with responsive design
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd maia-ai-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation component
│   └── Footer.tsx       # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About Us page
│   ├── Products.tsx    # Products overview
│   ├── EdgeViewProduct.tsx  # EdgeView detailed page
│   ├── Team.tsx        # Team page
│   └── Contact.tsx     # Contact page
├── styles/             # CSS files
│   ├── Home.css
│   ├── About.css
│   ├── Products.css
│   ├── EdgeViewProduct.css
│   ├── Team.css
│   ├── Contact.css
│   ├── Navigation.css
│   └── Footer.css
├── App.tsx             # Main app component
├── App.css             # Global styles
└── index.tsx           # Entry point
```

## Key Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern React** - Uses hooks, TypeScript, and latest React features
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance** - Optimized images and efficient code splitting
- **Accessibility** - WCAG compliant design

## Deployment

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify's deploy interface

## Contact

For questions about this website or Maia Technologies:

- Website: [maiatech.ai](https://maiatech.ai)
- Email: info@maiatech.ai
- Partnerships: partnerships@maiatech.ai

## License

© 2025 Maia Technologies. All rights reserved.