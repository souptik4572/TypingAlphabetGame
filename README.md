# Typing Alphabet Game

A fast-paced typing speed test game built with React and TypeScript. Challenge yourself to type randomly generated uppercase alphabets as quickly as possible!

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [How to Play](#how-to-play)
- [Configuration](#configuration)
- [Architecture](#architecture)
- [Components](#components)
- [Testing](#testing)
- [Build and Deployment](#build-and-deployment)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Typing Alphabet Game is an interactive web application that measures your typing speed and accuracy. The game presents random uppercase alphabet letters one at a time and challenges users to type them correctly and quickly. Your fastest completion time is stored locally and displayed as your personal best score.

## Features

- **Real-Time Typing Challenge**: Type randomly generated alphabets in sequence
- **Automatic Timer**: Timer starts on first keystroke and measures completion time in seconds
- **Best Score Tracking**: Personal best score is automatically saved to browser's local storage
- **Instant Feedback**: Immediate visual feedback for correct and incorrect inputs
- **Game Reset**: Easily restart the game at any time
- **Responsive Design**: Works seamlessly across all modern browsers and devices
- **Keyboard Auto-Focus**: Input field automatically focuses for seamless gameplay
- **Uppercase Conversion**: Input is automatically converted to uppercase for consistency

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 4.7.4
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **UI Components**: React with TypeScript functional components and hooks
- **Icons**: FontAwesome (v6.1.1)
- **Testing**: Jest with React Testing Library
- **Styling**: CSS3

## Project Structure

```
src/
├── components/
│   ├── Display/          # Character display component
│   │   ├── Display.tsx
│   │   └── Display.css
│   ├── Game/             # Main game logic and state management
│   │   ├── Game.tsx
│   │   └── Game.css
│   └── InputField/       # User input and reset controls
│       ├── InputField.tsx
│       └── InputField.css
├── types/
│   ├── props.ts          # Component prop definitions
│   └── state.ts          # Application state type definitions
├── utils/
│   ├── getChar.ts        # Character generation logic
│   ├── timer.ts          # Timer utilities
│   └── localStorage.ts   # Local storage management
├── App.tsx               # Root component
├── App.css
├── index.tsx             # Application entry point
└── index.css
```

## Getting Started

### Prerequisites

- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TypingAlphabetGame
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (Optional)
   ```bash
   # Create a .env file in the root directory
   echo "REACT_APP_CHAR_COUNT=26" >> .env
   ```

### Running the Application

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`. The page automatically reloads when you make changes.

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page reloads when you make edits
- Lint errors are displayed in the console

### `npm test`

Launches the test runner in interactive watch mode. Tests are defined using Jest and React Testing Library.

```bash
npm test
```

You can press `a` to run all tests, or `q` to quit watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

```bash
npm run build
```

- React is bundled in production mode
- The build is optimized for best performance
- Filenames include hashes for cache busting
- The build is ready for deployment

### `npm run eject` (Advanced)

**Note: This is a one-way operation. Once you eject, you cannot go back.**

```bash
npm run eject
```

This exposes all configuration files and dependencies if you need full control over the build setup.

## How to Play

1. **Start the Game**: Open the application in your browser
2. **Look at the Character**: A random uppercase letter will be displayed
3. **Type the Character**: Type the letter shown on your keyboard
4. **Move to Next**: Once you type the correct letter, the next character appears
5. **Complete All Letters**: Type all 26 letters of the alphabet as quickly as possible
6. **View Results**: Your completion time is displayed, and your best time is automatically saved
7. **Play Again**: Click the Reset button to start a new game

## Configuration

### Environment Variables

Create a `.env` file in the root directory to configure the application:

```env
# Number of characters to type in a round (default: 26 for full alphabet)
REACT_APP_CHAR_COUNT=26
```

## Architecture

### State Management

The application uses React hooks for state management:

- **Game State**: Tracks if the game is running
- **Current Character**: The character users need to type
- **Timer State**: Elapsed time and interval reference
- **Best Time**: User's personal best score from localStorage
- **Input Value**: Current user input

### Component Hierarchy

```
App
└── Game (Main Controller)
    ├── Display (Character Output)
    └── InputField (User Input)
```

## Components

### Game Component
The main orchestrator component that manages:
- Game state and logic
- Timer functionality
- Character progression
- Score tracking
- Reset functionality

### Display Component
Renders the current character and provides visual feedback:
- Shows the character to type
- Shows success/failure messages
- Visual styling for different states

### InputField Component
Handles user input and controls:
- Text input for user typing
- Character validation
- Auto-focus on character change
- Reset button for restarting the game

## Testing

Run tests with:

```bash
npm test
```

Tests are located in:
- `src/App.test.tsx` - Main application tests
- Individual test files can be added to component directories

To run tests in CI mode (no watch):

```bash
npm test -- --watchAll=false
```

## Build and Deployment

### Creating a Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deployment Options

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

**GitHub Pages**
- Update `package.json` with: `"homepage": "https://yourusername.github.io/TypingAlphabetGame"`
- Run: `npm install gh-pages --save-dev`
- Add scripts: `"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"`

## Performance

- **Lazy loading**: Characters are generated on-demand
- **Optimized re-renders**: React functional components with hooks minimize unnecessary renders
- **Local storage**: Best scores are cached locally for instant access
- **No external APIs**: Game runs entirely client-side for zero latency

### Web Vitals

The application is optimized for Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |

## Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Coding Standards

- Follow TypeScript strict mode
- Use functional components with hooks
- Add JSDoc comments for complex logic
- Maintain consistent naming conventions
- Run `npm test` before submitting PRs

## Performance Optimization Ideas

- Add different difficulty levels (mixed case, numbers, special characters)
- Implement difficulty progression system
- Add leaderboard with score history
- Add keyboard type detection (QWERTY, Dvorak, etc.)
- Implement multiplayer mode
- Add sound effects and animations
- Create mobile-optimized UI

## Troubleshooting

**Build fails with "REACT_APP_CHAR_COUNT is not defined"**
- Ensure `.env` file exists in root directory
- Add `REACT_APP_CHAR_COUNT=26` to `.env`
- Restart the development server

**Tests failing on CI/CD**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

For issues, questions, or suggestions, please open an issue on the project repository.

---

**Happy Typing! 🚀**
