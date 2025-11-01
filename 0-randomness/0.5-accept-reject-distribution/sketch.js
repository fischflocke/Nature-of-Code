// Expected behaviour: larger numbers have a higher acceptance
// probability, distribution should be skewed toward the right margin

// Keep track of how often random numbers are picked
let randomCounts = [];
// Total number of counts
const total = 20;

function acceptreject() {
	// Repeat until we find a qualifying random value
	while (true) {
		// Pick a random value
		const r1 = random(1);
		// Compute / assign an acceptance probability
		const p = r1;
		// Pick a second random value
		const r2 = random(1);
		// Check if r1 qualifies
		if (r2 < p) {
			return r1;
		}
	}
}

function setup() {
	createCanvas(640, 240);

	for (let i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {
	background(255);

	// Pick a random number and increase the count
	let index = int(acceptreject() * total);
	randomCounts[index]++;

	// Graph results
	stroke(0);
	fill(127);
	const w = width / total;

	for (let x = 0; x < total; x++) {
		rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
	}
}
