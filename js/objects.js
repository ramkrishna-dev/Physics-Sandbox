import { Bodies } from 'matter-js';

export function createCircle(x, y, radius = 20) {
    return Bodies.circle(x, y, radius, {
        restitution: 0.8,
        friction: 0.3,
        density: 0.001
    });
}

export function createRectangle(x, y, width = 40, height = 40) {
    return Bodies.rectangle(x, y, width, height, {
        restitution: 0.8,
        friction: 0.3,
        density: 0.001
    });
}

export function createRandomCircle() {
    const x = Math.random() * (window.innerWidth - 100) + 50;
    const y = 50;
    const radius = Math.random() * 20 + 10;
    return createCircle(x, y, radius);
}

export function createRandomRectangle() {
    const x = Math.random() * (window.innerWidth - 100) + 50;
    const y = 50;
    const width = Math.random() * 40 + 20;
    const height = Math.random() * 40 + 20;
    return createRectangle(x, y, width, height);
}