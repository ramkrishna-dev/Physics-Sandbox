import { addBody, clearAllBodies, toggleGravity, getWorld, toggleGrid, takeScreenshot, applyExplosion } from './engine.js';
const Matter = window.Matter;
const { Body } = Matter;
import { createRandomCircle, createRandomRectangle, createCircle, createRectangle } from './objects.js';
import { setCurrentTool } from './interactions.js';

let sidebarOpen = false;

export function initUI() {
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    const createCircleBtn = document.getElementById('create-circle');
    const createRectangleBtn = document.getElementById('create-rectangle');
    const deleteToolBtn = document.getElementById('delete-tool');
    const impulseToolBtn = document.getElementById('impulse-tool');
    const clearAllBtn = document.getElementById('clear-all');
    const gravityToggle = document.getElementById('gravity-toggle');
    const gridToggle = document.getElementById('grid-toggle');
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const screenshotBtn = document.getElementById('screenshot-btn');
    const explosionToolBtn = document.getElementById('explosion-tool');
    const saveBtn = document.getElementById('save-scene');
    const loadBtn = document.getElementById('load-scene');
    const loadFileInput = document.getElementById('load-file');

    toggleSidebarBtn.addEventListener('click', () => {
        sidebarOpen = !sidebarOpen;
        sidebar.classList.toggle('open', sidebarOpen);
    });

    createCircleBtn.addEventListener('click', () => {
        const circle = createRandomCircle();
        addBody(circle);
    });

    createRectangleBtn.addEventListener('click', () => {
        const rect = createRandomRectangle();
        addBody(rect);
    });

    deleteToolBtn.addEventListener('click', () => {
        setCurrentTool('delete');
    });

    impulseToolBtn.addEventListener('click', () => {
        setCurrentTool('impulse');
    });

    clearAllBtn.addEventListener('click', () => {
        clearAllBodies();
    });

    gravityToggle.addEventListener('change', (e) => {
        toggleGravity(e.target.checked);
    });

    gridToggle.addEventListener('change', (e) => {
        toggleGrid(e.target.checked);
    });

    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    screenshotBtn.addEventListener('click', () => {
        takeScreenshot();
    });

    explosionToolBtn.addEventListener('click', () => {
        setCurrentTool('explosion');
    });

    // Load theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }

    saveBtn.addEventListener('click', () => {
        const world = getWorld();
        const data = {
            bodies: world.bodies.filter(b => !b.isStatic).map(b => {
                const bodyData = {
                    type: b.circle ? 'circle' : 'rectangle',
                    position: b.position,
                    angle: b.angle
                };
                if (b.circle) {
                    bodyData.radius = b.circleRadius;
                } else {
                    bodyData.width = b.bounds.max.x - b.bounds.min.x;
                    bodyData.height = b.bounds.max.y - b.bounds.min.y;
                }
                return bodyData;
            })
        };
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'scene.json';
        a.click();
        URL.revokeObjectURL(url);
    });

    loadBtn.addEventListener('click', () => {
        loadFileInput.click();
    });

    loadFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    clearAllBodies();
                    data.bodies.forEach(b => {
                        let body;
                        if (b.type === 'circle') {
                            body = createCircle(b.position.x, b.position.y, b.radius);
                        } else {
                            body = createRectangle(b.position.x, b.position.y, b.width, b.height);
                        }
                        Body.setAngle(body, b.angle);
                        addBody(body);
                    });
                } catch (err) {
                    alert('Invalid file');
                }
            };
            reader.readAsText(file);
        }
    });
}