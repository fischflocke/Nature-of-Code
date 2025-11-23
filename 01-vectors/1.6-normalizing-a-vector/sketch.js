function setup() {
    createCanvas(640, 240);
}

function draw() {
    background(255);

    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);

    mouse.sub(center);

    translate(width / 2, height / 2);
    stroke(200);
    strokeWeight(2);
    line(0, 0, mouse.x, mouse.y);

    // Vector now always has the same length 50
    mouse.normalize();
    mouse.mult(50);
    
    stroke(0);
    strokeWeight(8);
    line(0, 0, mouse.x, mouse.y);
}
