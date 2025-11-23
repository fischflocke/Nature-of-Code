let mover;

function setup() {
    createCanvas(640, 240);

    mover = new Mover();
}

function draw() {
    background(255);

    mover.update();
    mover.checkEdges();
    mover.show();
}

class Mover {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(0, 0);
        this.vMax = 10;
    }

    update() {
        let accel = p5.Vector.random2D();
        accel.mult(0.2);

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

    checkEdges() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
}
