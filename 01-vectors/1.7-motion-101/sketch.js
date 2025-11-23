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
        this.velocity = createVector(2, 2);
    }

    update() {
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
            this.position.x = -48;
        } else if (this.position.x < -48) {
            this.position.x = width + 48;
        }

        if (this.position.y > height) {
            this.position.y = -48;
        } else if (this.position.y < -48) {
            this.position.y = height + 48;
        }
    }
}
