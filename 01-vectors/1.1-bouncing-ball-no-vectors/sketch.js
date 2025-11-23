// Position and speed of the ball
let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;

function setup() {
    createCanvas(640, 240);
}

function draw() {
    background(255);

    // Move ball
    x += xspeed;
    y += yspeed;

    // Bounce off walls
    if (x > width || x < 0)
        xspeed *= -1;
    if (y > height || y < 0)
        yspeed *= -1;

    // Draw ball
    stroke(0);
    fill(127);
    circle(x, y, 48);
}
