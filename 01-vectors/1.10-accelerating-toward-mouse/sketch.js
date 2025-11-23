let mover;

function setup() {
    createCanvas(640, 240);

    mover = new Mover();
}

function draw() {
    background(255);

    mover.update();
    mover.show();
}

class Mover {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);
        this.vMax = 5;
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let dir = p5.Vector.sub(mouse, this.position);
        dir.normalize();
        dir.mult(0.2);
        const accel = dir;
        this.velocity.add(accel);
        this.velocity.limit(this.vMax);
        this.position.add(this.velocity);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x + 24, this.position.y + 24, 48);
    }
}
