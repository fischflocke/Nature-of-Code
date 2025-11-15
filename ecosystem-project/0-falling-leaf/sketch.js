let img;
let x, y;

function preload() {
    img = loadImage("leaf.png");
}

function setup() {
    createCanvas(800, 600);

    x = 150;
    y = 0;
}

function draw() {
    background(255);
    image(img, x, y, 146, 60);

    x = 300 + 150 * Math.cos(0.02 * y);
    y += 0.05 * deltaTime;
    y = Math.min(540, y);
}
