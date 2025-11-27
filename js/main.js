import { initEngine, resizeCanvas } from './engine.js';
import { initInteractions } from './interactions.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const homeScreen = document.getElementById('home-screen');
    const canvas = document.getElementById('canvas');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', () => {
        homeScreen.style.display = 'none';
        canvas.style.display = 'block';
        const render = initEngine(canvas);
        initInteractions(canvas, render);
        initUI();
    });

    window.addEventListener('resize', () => {
        if (canvas.style.display !== 'none') {
            resizeCanvas(window.innerWidth, window.innerHeight);
        }
    });
});