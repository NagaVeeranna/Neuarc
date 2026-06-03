# Neuarc Innovation Collective

Welcome to the **Neuarc Landing Page** source code. Neuarc is the premier student-led innovation hub where engineering meets creativity. We ship intelligent solutions, conduct deep research, and scale student-led ventures.

This repository contains the completely redesigned frontend interface, featuring a highly polished, modern technical aesthetic inspired by leading developer platforms like GitHub.

## 🌟 Key Features

- **GitHub-Inspired Aesthetic:** A sleek dark mode UI utilizing deep blues and purples (`#0d1117`, `#161b22`), crisp 1px borders, and the sophisticated `Geist` font family to provide a premium engineering feel.
- **Advanced CSS Animations:** Custom neon-glowing border animations on interactive tabs and cards, built using cutting-edge CSS (`@property`, `conic-gradient`, and `-webkit-mask`).
- **Interactive UI Components:**
  - **Floating Code Snippets:** Dynamic, floating terminal windows in the hero section.
  - **Product Tabs:** Interactive modules with simulated terminal output.
  - **Bento Grid:** A structured ecosystem showcase.
  - **Cosmic Backgrounds:** Animated twinkling stars and radial glow effects.
- **Responsive Layout:** Fully optimized for all screen sizes using Material UI's grid system.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **UI Library:** [Material UI (MUI) v5](https://mui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** Custom CSS with CSS variables and advanced keyframes.

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v16+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Neuarc
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The compiled assets will be placed in the `dist` directory.

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## 👨‍💻 Contributing

We welcome contributions! Please follow our established coding standards:
- Maintain the "engineering-first" dark aesthetic.
- Ensure all interactive elements utilize the `.glow-border` or `.github-tab` utility classes for consistency.
- Run `npm run lint` before committing any changes.

## 📝 License

© 2026 NEURAC, Inc. All rights reserved. Made with passion by the Neurac Collective.
