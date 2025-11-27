import { initEngine, resizeCanvas } from './engine.js';
import { initInteractions } from './interactions.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const render = initEngine(canvas);
    initInteractions(canvas, render);
    initUI();

    window.addEventListener('resize', () => {
        resizeCanvas(window.innerWidth, window.innerHeight);
    });
});