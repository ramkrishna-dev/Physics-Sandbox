# 🧲 Physics Sandbox

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-blue.svg)](https://www.javascript.com/)
[![Matter.js](https://img.shields.io/badge/Matter.js-0.19.0-green.svg)](https://brm.io/matter-js/)

A fun and interactive **browser-based 2D physics sandbox** built with [Matter.js](https://brm.io/matter-js/), allowing users to create, manipulate, and simulate physics objects in a fully responsive environment optimized for both desktop and mobile devices. Perfect for learning physics concepts or just having fun!

## ✨ Features

### 🔬 Physics Simulation
- Realistic gravity, collisions, restitution, friction, and density
- Toggle gravity on/off for zero-gravity experiments
- Powered by the robust Matter.js physics engine

### 🎨 Object Creation
- Spawn circles and rectangles with random properties
- Customizable physics attributes (coming soon)

### 👆 Interactions
- **Drag & Drop**: Move objects with mouse or touch
- **Delete Tool**: Remove objects with a tap/click
- **Impulse Tool**: Apply forces to objects for dynamic motion
- **Clear All**: Reset the scene instantly

### 📱 Mobile-Friendly UI
- Responsive sidebar that slides in/out
- Touch-optimized controls
- Adaptive canvas rendering for all screen sizes
- Prevents unwanted zoom/scroll on mobile

### 🌙 Themes
- Dark and light mode toggle
- Persistent theme preference via localStorage

### 💾 Save & Load
- Export scenes to JSON files
- Import saved scenes
- Autosave functionality (theme only, for now)

### 🚀 Future Enhancements
- Soft bodies and constraints (ropes, ragdolls)
- Explosions and radial forces
- Grid overlays and screenshot export
- Custom object properties editor

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- For local development: a simple HTTP server (see below)

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ramkrishna-dev/physics-sandbox.git
   cd physics-sandbox
   ```

2. **Run a local server**:
   - Due to ES module imports, you need to serve the files via HTTP
   - **Option 1: Python (recommended)**
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser
   - **Option 2: Node.js**
     ```bash
     npx http-server
     ```
   - **Option 3: VS Code Live Server extension**
     - Install the extension
     - Right-click `index.html` and select "Open with Live Server"

### 🌐 Deploy to GitHub Pages
1. Push your code to a GitHub repository
2. Go to **Settings** > **Pages**
3. Select **Deploy from a branch** and choose `main` (or your default branch)
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/physics-sandbox/`

No build process or additional dependencies needed!

## 📱 Mobile Usage

The app is fully optimized for mobile devices:
- Use touch gestures to drag objects
- Tap the hamburger menu (☰) to access tools
- All interactions work seamlessly on touchscreens
- Responsive design adapts to any screen size

## 📸 Screenshots

![Physics Sandbox in Action](assets/screenshot.png)

*Coming soon: Actual screenshots of the app in use!*

## 🤝 Contributing

We love contributions! Whether it's bug fixes, new features, or documentation improvements, your help is welcome.

Please read our [Contributing Guide](CONTRIBUTING.md) for details on:
- Setting up a development environment
- Coding standards and style guidelines
- Submitting pull requests
- Reporting issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Matter.js](https://brm.io/matter-js/) - the amazing 2D physics engine
- Inspired by various physics sandbox applications
- Thanks to the open-source community for tools and inspiration

---

**Have fun simulating physics! 🔬⚡**
