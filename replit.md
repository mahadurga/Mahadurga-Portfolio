# Overview

This is a modern portfolio website for Mahadurga P, a Computer Science Engineering student at Panimalar Engineering College. The project combines cutting-edge web technologies to create an immersive, interactive 3D portfolio experience with smooth physics-based animations, section navigation, and responsive design. The portfolio showcases educational background, skills, projects, certifications, achievements, and contact information through an engaging animated interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast hot module replacement
- **Tailwind CSS** for utility-first styling with custom design system
- **Framer Motion** for advanced animations and physics-based interactions
- **React Three Fiber** for 3D graphics and WebGL rendering
- **React Three Drei** for additional 3D utilities and helpers
- **TanStack Query** for state management and data fetching

## Backend Architecture
- **Express.js** server with TypeScript support
- **Node.js** runtime environment
- In-memory storage implementation with interface-based design for future database integration
- RESTful API structure with `/api` prefix routing
- Middleware for request logging and error handling

## Database Design
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- **Neon Database** (@neondatabase/serverless) for serverless PostgreSQL hosting
- User schema with basic authentication fields (username, password)
- Migration system configured in `./migrations` directory
- Environment-based database configuration

## Animation System
- Custom physics engine using Framer Motion for "dropping object" animations
- Gravity simulation with bounce easing for interactive elements
- Section-based animation states with scroll-triggered reveals
- Smooth transitions between portfolio sections with Z-axis depth motion
- Hover interactions with lift, color change, and tilt effects

## 3D Graphics Integration
- Three.js integration through React Three Fiber for 3D scene management
- Custom 3D components for floating elements, particle systems, and animated backgrounds
- GLSL shader support for advanced visual effects
- Optimized asset loading for 3D models (.gltf, .glb) and audio files

## Navigation System
- Smooth scroll-based section navigation with custom easing functions
- Physics-based scroll animations with momentum and bounce
- Section indicators with real-time highlighting
- Mobile-responsive navigation with touch support

## Build System
- **ESBuild** for server-side bundling and optimization
- **PostCSS** with Autoprefixer for CSS processing
- Asset optimization for fonts, images, and 3D models
- Development and production build configurations
- TypeScript compilation with path mapping for clean imports

## Development Tools
- Hot module replacement in development with Vite
- Runtime error overlay for debugging
- TypeScript strict mode configuration
- ESLint and Prettier integration (implied by project structure)
- Path aliases for cleaner imports (@/* for client, @shared/* for shared code)

# External Dependencies

## Core Frameworks
- **React 18** - Frontend UI framework
- **Express.js** - Backend web server
- **Vite** - Build tool and development server
- **TypeScript** - Type safety and development experience

## Database & ORM
- **Drizzle ORM** - Type-safe database queries and migrations
- **@neondatabase/serverless** - Serverless PostgreSQL database hosting
- **Zod** - Schema validation for database operations

## 3D Graphics & Animation
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **@react-three/postprocessing** - Post-processing effects
- **Three.js** - 3D graphics library
- **Framer Motion** - Animation library with physics simulation

## UI Components & Styling
- **Radix UI** - Unstyled, accessible UI primitives (20+ components)
- **Tailwind CSS** - Utility-first CSS framework
- **@fontsource/inter** - Inter font family
- **class-variance-authority** - Utility for creating variant-based components
- **clsx** - Conditional className utility

## State Management & Data Fetching
- **@tanstack/react-query** - Server state management and caching
- **Zustand** (implied by hooks structure) - Client-side state management

## Development & Build Tools
- **tsx** - TypeScript execution for development
- **esbuild** - Fast JavaScript bundler for production
- **vite-plugin-glsl** - GLSL shader support in Vite
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error reporting

## Utilities
- **date-fns** - Date utility functions
- **nanoid** - Unique ID generation
- **cmdk** - Command palette functionality
- **lucide-react** - Icon library