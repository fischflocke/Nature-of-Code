
function setup() {
	createCanvas(640, 240);
	background(255);
}

function draw() {
	// Sample a normal distribution with mean 320 and sd 60
	const x = 60 * randomGaussian() + 320

	noStroke();
	fill(0, 10);
	circle(x, 120, 16);
}
