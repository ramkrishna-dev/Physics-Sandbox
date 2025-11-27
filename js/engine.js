const Matter = window.Matter;
const { Engine, World, Render, Bodies, Body, Composite, Runner, Events, Vector } = Matter;

let engine;
let world;
let render;
let gridEnabled = false;

export function initEngine(canvas) {
    engine = Engine.create();
    world = engine.world;

    render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false,
            background: 'transparent'
        }
    });

    // Add ground and walls
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 10, window.innerWidth, 20, { isStatic: true });
    const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true });
    const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true });
    const ceiling = Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 20, { isStatic: true });

    World.add(world, [ground, leftWall, rightWall, ceiling]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    Events.on(render, 'afterRender', drawGrid);

    return render;
}

export function addBody(body) {
    World.add(world, body);
}

export function addComposite(composite) {
    World.add(world, composite);
}

export function removeBody(body) {
    World.remove(world, body);
}

export function clearAllBodies() {
    const bodies = Composite.allBodies(world);
    bodies.forEach(body => {
        if (!body.isStatic) {
            World.remove(world, body);
        }
    });
}

export function toggleGravity(enabled) {
    engine.world.gravity.y = enabled ? 1 : 0;
}

export function applyImpulse(body, force) {
    Body.applyForce(body, body.position, force);
}

export function getWorld() {
    return world;
}

function drawGrid() {
    if (!gridEnabled) return;
    const ctx = render.canvas.getContext('2d');
    const gridSize = 50;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let x = 0; x < render.canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, render.canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < render.canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(render.canvas.width, y);
        ctx.stroke();
    }
}

export function toggleGrid(enabled) {
    gridEnabled = enabled;
}

export function takeScreenshot() {
    const link = document.createElement('a');
    link.download = 'physics-sandbox-screenshot.png';
    link.href = render.canvas.toDataURL();
    link.click();
}

export function applyExplosion(x, y, radius = 100, force = 0.1) {
    const bodies = Composite.allBodies(world);
    bodies.forEach(body => {
        if (!body.isStatic) {
            const distance = Vector.magnitude(Vector.sub(body.position, { x, y }));
            if (distance < radius) {
                const direction = Vector.normalise(Vector.sub(body.position, { x, y }));
                const explosionForce = Vector.mult(direction, force / (distance + 1));
                Body.applyForce(body, body.position, explosionForce);
            }
        }
    });
}

export function resizeCanvas(width, height) {
    render.options.width = width;
    render.options.height = height;
    render.canvas.width = width;
    render.canvas.height = height;
}