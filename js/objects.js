const Matter = window.Matter;
const { Bodies, Composites, Constraint } = Matter;

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

export function createRagdoll(x, y) {
    const group = Body.nextGroup(true);
    const head = Bodies.circle(x, y - 60, 15, { collisionFilter: { group: group } });
    const torso = Bodies.rectangle(x, y, 30, 50, { collisionFilter: { group: group } });
    const leftArm = Bodies.rectangle(x - 20, y - 10, 20, 40, { collisionFilter: { group: group } });
    const rightArm = Bodies.rectangle(x + 20, y - 10, 20, 40, { collisionFilter: { group: group } });
    const leftLeg = Bodies.rectangle(x - 10, y + 40, 20, 40, { collisionFilter: { group: group } });
    const rightLeg = Bodies.rectangle(x + 10, y + 40, 20, 40, { collisionFilter: { group: group } });

    const neck = Constraint.create({ bodyA: head, bodyB: torso, pointA: { x: 0, y: 15 }, pointB: { x: 0, y: -25 } });
    const leftShoulder = Constraint.create({ bodyA: torso, bodyB: leftArm, pointA: { x: -15, y: -20 }, pointB: { x: 0, y: 15 } });
    const rightShoulder = Constraint.create({ bodyA: torso, bodyB: rightArm, pointA: { x: 15, y: -20 }, pointB: { x: 0, y: 15 } });
    const leftHip = Constraint.create({ bodyA: torso, bodyB: leftLeg, pointA: { x: -10, y: 25 }, pointB: { x: 0, y: -20 } });
    const rightHip = Constraint.create({ bodyA: torso, bodyB: rightLeg, pointA: { x: 10, y: 25 }, pointB: { x: 0, y: -20 } });

    return Composites.create({
        bodies: [head, torso, leftArm, rightArm, leftLeg, rightLeg],
        constraints: [neck, leftShoulder, rightShoulder, leftHip, rightHip]
    });
}