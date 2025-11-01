class Walker {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
	}

	show() {
		stroke(0);
		point(this.x, this.y);
	}

	step() {
		let xstep = floor(random(3)) - 1;
		let ystep = floor(random(3)) - 1;

		// 1% chance of taking a large step
		const r = random(1);
		if (r < 0.01) {
			xstep *= 100;
			ystep *= 100;
		}

		this.x += xstep;
		this.y += ystep;
	}
}

let walker;

function setup() {
	createCanvas(640, 240);
	background(255);

	walker = new Walker();
	walker.show();
}

function draw() {
	walker.step();
	walker.show();
}
