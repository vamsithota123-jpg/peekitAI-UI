# Peekit.ai Dashboard

A React.js application recreating the Peekit.ai "Top Trends Today" dashboard with Tailwind CSS.

## Features

- Dark-themed UI matching the original design
- Responsive layout with header navigation
- Trends table displaying Hot, Rising Soon, and Cold trends from multiple sources
- Interactive hover effects
- Modern React components with Tailwind CSS styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd peekit-ai-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## Project Structure

```
peekit-ai-dashboard/
├── src/
│   ├── components/
│   │   └── TopTrendsToday.jsx  # Main dashboard component
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind CSS imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

