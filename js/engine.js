const Matter = window.Matter;
const { Engine, World, Render, Bodies, Body, Composite, Runner } = Matter;

let engine;
let world;
let render;

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

    return render;
}

export function addBody(body) {
    World.add(world, body);
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

export function resizeCanvas(width, height) {
    render.options.width = width;
    render.options.height = height;
    render.canvas.width = width;
    render.canvas.height = height;
}