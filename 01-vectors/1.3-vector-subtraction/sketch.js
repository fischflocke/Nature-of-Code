function setup() {
    createCanvas(640, 240);
}

function draw() {
    background(255);

    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);

    // Draw both vectors
    stroke(200);
    strokeWeight(4);
    line(0, 0, mouse.x, mouse.y);
    line(0, 0, center.x, center.y);

    // Vector subtraction
    mouse.sub(center);

    // Draw subtraction; translate origin to canvas center
    stroke(0);
    translate(width / 2, height / 2);
    line(0, 0, mouse.x, mouse.y);
}
