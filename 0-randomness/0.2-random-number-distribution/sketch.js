// Keep track of how often random numbers are picked
let randomCounts = [];
// Total number of counts
const total = 20;

function setup() {
	createCanvas(640, 240);

	for (let i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {
	background(255);

	// Pick random number and increase count
	const index = floor(random(total));
	randomCounts[index]++;

	// Graph results
	stroke(0);
	fill(127);
	const w = width / total;

	for (let x = 0; x < total; x++) {
		rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
	}
}
