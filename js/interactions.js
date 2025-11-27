const Matter = window.Matter;
const { Mouse, MouseConstraint, Events, Body, Vector, Query, World } = Matter;
import { removeBody, applyImpulse, getWorld } from './engine.js';

let mouse;
let mouseConstraint;
let currentTool = null;
let canvas;

export function initInteractions(canvasElement, render) {
    canvas = canvasElement;
    mouse = Mouse.create(canvas, { touch: true });
    mouseConstraint = MouseConstraint.create(render.engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: { visible: false }
        }
    });

    // Add mouse constraint to world for dragging
    World.add(getWorld(), mouseConstraint);

    Events.on(mouseConstraint, 'mousedown', (event) => {
        handleMouseDown(event);
    });

    Events.on(mouseConstraint, 'mouseup', (event) => {
        handleMouseUp(event);
    });

    // Touch support
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Prevent context menu
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
}

function handleMouseDown(event) {
    const body = event.source.body;
    if (body && !body.isStatic) {
        if (currentTool === 'delete') {
            removeBody(body);
        } else if (currentTool === 'impulse') {
            const force = Vector.create(0, -0.05);
            applyImpulse(body, force);
        }
    }
}

function handleMouseUp(event) {
    // For drag, handled by mouseConstraint
}

function handleTouchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Simulate mouse event
    const bodies = getWorld().bodies;
    for (let body of bodies) {
        if (body && !body.isStatic && Query.point([body], { x, y }).length > 0) {
            if (currentTool === 'delete') {
                removeBody(body);
            } else if (currentTool === 'impulse') {
                const force = Vector.create(0, -0.05);
                applyImpulse(body, force);
            }
            break;
        }
    }
}

function handleTouchEnd(event) {
    // Similar to mouseup
}

export function setCurrentTool(tool) {
    currentTool = tool;
    if (tool === 'drag') {
        // Enable drag
    } else {
        // Disable drag if needed
    }
}