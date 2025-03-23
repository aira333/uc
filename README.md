# UC ORB - University of California Open Source Repository Browser ( a demo for GSOC - 2025 )🌻

🔮UC ORB is a pioneering tool that showcases and categorizes open-source projects across the University of California system. With a strong commitment to open-source innovation, the UC system is advancing efforts to make software more accessible, transparent, and collaborative. This initiative, in partnership with the UC Network of Open Source Program Offices (OSPOs), brings together six campuses to promote open-source research, drive sustainable development, and set new standards for open collaboration in academia.

## Overview

✨The UC ORB web application provides an intuitive interface for exploring open-source projects across the UC system. It enhances the visibility of UC's open-source contributions, fosters collaboration among researchers and developers, and serves as a model for other institutions aiming to improve open-source discovery and sustainability.

---

## High-Level Design (HLD)

### Architecture Overview 🕸️

- **Frontend:** Built with React 18 and TypeScript using Vite as the build tool.
- **Styling:** Tailwind CSS with shadcn/ui components based on Radix UI.
- **State Management:** TanStack Query (React Query) for data fetching and caching.
- **Routing:** React Router for client-side navigation.

### File Structure 📂

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

### Architecture Diagram 🐢

```
+----------------------------+
|        User Interface      |
|    (React + Tailwind CSS)  |
+------------+--------------+
             |
             v
+------------------+------------------+
| React Router     |  State Management |
| (Client-side Nav)| (React Query)     |
+------------------+------------------+
              |
              v
+------------------------------------+
|         Data Fetching Layer        |
| (Mock Data / API Integration)     |
+------------------------------------+
```

---

## Low-Level Design (LLD) 🪼

### Component Breakdown

#### 1. `components/Layout/`
- Contains layout components such as Header, Footer, and navigation elements.
- Manages the general structure of the application.

#### 2. `components/ui/`
- Houses UI elements from shadcn/ui and custom-designed components.
- Includes buttons, modals, input fields, and interactive elements.

#### 3. `hooks/`
- Custom hooks for data fetching, filtering, and state management.
- Examples: `useProjects.ts` for project data, `useFilters.ts` for filtering options.

#### 4. `lib/`
- Utility functions and mock data for development purposes.
- Examples: `data.ts` for mock project listings, `utils.ts` for helper functions.

#### 5. `pages/`
- Represents different views in the application:
  - `Index.tsx` → Home page.
  - `Browse.tsx` → Browse open-source projects.
  - `ProjectDetail.tsx` → Detailed project information.
  - `About.tsx` → About UC ORB.
  - `NotFound.tsx` → 404 page.

#### 6. `main.tsx & App.tsx`
- `main.tsx` initializes the React app and mounts it to the DOM.
- `App.tsx` acts as the root component, managing global layout and routes.

### Data Flow 🐧

```
User Interaction → State Update → Data Fetching → UI Update
```

1. **User Interacts** → Clicks button, selects filters, navigates pages.
2. **State Updates** → Managed by React Hooks and TanStack Query.
3. **Data Fetching** → Retrieves project information from `lib/data.ts` (mock) or backend APIs.
4. **UI Updates** → Components re-render based on new data.

### Sequence Diagram 🐨

```
User → UI Component → State Management → Data Fetching → UI Update
```
1. User requests project data.
2. UI component triggers a state update.
3. React Query fetches data from API or mock data.
4. Data is processed and stored.
5. UI updates and displays results.

---

## Repository 🦋

**GitHub:** [UC ORB Repository](https://github.com/aira333/uc)

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm, yarn, or pnpm

### Installation

Clone the repository:

```sh
git clone https://github.com/aira333/uc.git
cd uc
```

Install dependencies:

```sh
npm install
# or
yarn
# or
pnpm install
```

Start the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

Viola!!🥳 Open your browser and navigate to `http://localhost:8080`

---

## Building for Production 🖥️

Create a production build:

```sh
npm run build
# or
yarn build
# or
pnpm build
```

Preview the production build:

```sh
npm run preview
# or
yarn preview
# or
pnpm preview
```

---

## Development Notes 📜

### State Management

- **TanStack Query:** Used for data fetching, caching, and state management.
- **React Hooks:** Local component state managed with `useState` and `useEffect`.
- **Custom Hooks:** Created for project data and filtering functionality.

### Styling

- **Tailwind CSS:** Used for responsive design and styling.
- **Glass Morphism:** Applied for modern UI elements.
- **Transitions & Animations:** Smooth user interactions and loading states.

---

## Next Steps 🐣

- Integrate with backend APIs for live project data.
- Optimize state management and caching strategies.
- Enhance UI with more interactive elements and animations.

---
