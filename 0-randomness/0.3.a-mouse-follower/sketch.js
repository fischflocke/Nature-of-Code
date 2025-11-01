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
		const r = random(1);

		// 50% chance that it moves toward the mouse
		if (r < 0.5) {
			if (r < 0.25) {
				this.x += this.x < mouseX ? 1 : -1;
			}
			else {
				this.y += this.y < mouseY ? 1 : -1;
			}
		} else {
			const xstep = floor(random(3)) - 1;
			const ystep = floor(random(3)) - 1;

			this.x += xstep;
			this.y += ystep;
		}

		console.log(mouseX + ", " + mouseY)
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
