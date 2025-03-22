<<<<<<< HEAD
# UC ORB - University of California Open Source Repository Browser

UC ORB is a pioneering tool that showcases and categorizes open-source projects across the University of California system. With a strong commitment to open-source innovation, the UC system is advancing efforts to make software more accessible, transparent, and collaborative. This initiative, in partnership with the UC Network of Open Source Program Offices (OSPOs), brings together six campuses to promote open-source research, drive sustainable development, and set new standards for open collaboration in academia.

## Overview

We are dedicated to strengthening the open-source ecosystem within the UC system and beyond. By serving as a central hub, it amplifies the impact of UC’s open-source contributions, nurtures collaboration among researchers and developers, and champions a culture of transparency and innovation. Committed to sustainability and knowledge sharing, UC ORB aspires to set a new standard for institutions looking to embrace and enhance open-source discovery.

## Tech Stack

### Frontend
- **React 18**: Core UI library
- **TypeScript**: Type-safe JavaScript superset
- **Vite**: Fast, modern frontend build tool
- **React Router**: Client-side routing
- **TanStack Query (React Query)**: Data fetching and state management
- **shadcn/ui**: Component library based on Radix UI
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Lightweight icon library

### Tools & Utilities
- **ESLint**: Static code analysis
- **PostCSS**: CSS transformations
- **clsx & tailwind-merge**: Utilities for conditional class names

## Features

- **Responsive Design**: Works across desktop and mobile devices
- **Project Discovery**: Browse and search through UC open source projects
- **Advanced Filtering**: Filter projects by campus, programming language, topics, and more
- **Project Details**: View comprehensive information about each project including contributors, README, and stats
- **Modern UI**: Clean, accessible interface with smooth transitions and animations

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Layout/         # Layout components (Header, Footer, etc.)
│   └── ui/             # shadcn/ui components and custom UI elements
├── hooks/              # Custom React hooks
├── lib/                # Utilities and data
│   ├── data.ts         # Mock data and data generation
│   └── utils.ts        # Helper functions
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Browse.tsx      # Browse projects page
│   ├── Index.tsx       # Home page
│   ├── NotFound.tsx    # 404 page
│   └── ProjectDetail.tsx # Project details page
├── App.tsx             # Main app component with routing
├── index.css           # Global styles
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone 'PASTE GITHUB URL'
   cd uc-orb
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   # or
   yarn preview
   # or
   pnpm preview
   ```

## Development Notes

### State Management
- **TanStack Query**: Used for data fetching, caching, and state management
- **React Hooks**: Local component state managed with useState and useEffect
- **Custom Hooks**: Created for project data and filtering functionality

### Styling
-  **Tailwind CSS**: Used for responsive design and styling
- **Glass Morphism**: Applied for modern UI elements
- **Transitions & Animations**: Smooth user interactions and loading states

### Data Flow
- Currently using mock data in `lib/data.ts`
- Ready for integration with backend services - PostgreSQL (through a Node.js backend)
- Type-safe data handling with TypeScript interfaces

## Browser Support

The application is built to support modern browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Contributing

We welcome contributions🥳✨! Please read our contributing guidelines before submitting pull requests.

## Acknowledgments

- UC Network of Open Source Program Offices
- The participating UC campuses
- All contributors to the project

