let leaf;

function preload() {
    leaf = new Leaf();
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255);
    
    leaf.update();
    leaf.render();
}

class Leaf {
    constructor() {
        this.img = loadImage("leaf.png");

        this.position = createVector(150, 0);
        this.velocity = createVector();
        this.acceleration = createVector();
    }


    update() {
        // Distance to the boundaries 150 and 450
        const dl = this.position.x - 150;
        const dr = 450 - this.position.x;
        
        const k = 0.00001;

        // Calculate acceleration
        this.acceleration.x = -k * dl + k * dr;
        this.acceleration.y = 0.0002;

        // Accelerate leaf and normalize movement with delta time
        this.velocity.add(this.acceleration);
        const vn = p5.Vector.mult(this.velocity, deltaTime);

        // Update position if the leave is still falling
        if (this.position.y < 540)
            this.position.add(vn);
    }

    render() {
        image(this.img, this.position.x, this.position.y, 146, 60);
    }
}
