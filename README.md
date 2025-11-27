# Physics Sandbox

A browser-based 2D physics sandbox built with Matter.js, allowing users to create, interact with, and simulate physics objects in a fully responsive environment optimized for both desktop and mobile devices.

## Features

- **Physics Simulation**: Realistic gravity, collisions, restitution, friction, and density using Matter.js
- **Object Creation**: Spawn circles and rectangles with customizable properties
- **Interactions**: Drag objects with mouse or touch, delete objects, apply impulse forces
- **Controls**: Toggle gravity on/off, clear all objects
- **UI/UX**: Mobile-friendly sidebar, touch support, responsive design
- **Themes**: Dark and light mode toggle
- **Save/Load**: Export scenes to JSON, import scenes, with localStorage autosave
- **Optional Features**: Grid overlays, screenshot capability (future enhancements)

## Installation and Running

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/physics-sandbox.git
   cd physics-sandbox
   ```

2. Open `index.html` in your web browser. No server required - it runs entirely in the browser.

## Mobile Support

The application is fully optimized for mobile devices:
- Touch controls for all interactions
- Responsive sidebar that slides in/out
- Optimized canvas rendering for various screen sizes
- Prevented zoom and scroll behaviors for better physics interaction

## Screenshots

![Physics Sandbox Screenshot](assets/screenshot.png)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.