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

		// 40% chance of moving to the right
		if (r < 0.4) {
			this.x++;
		}
		else if (r < 0.6) {
			this.x--;
		} else if (r < 0.8) {
			this.y++;
		} else {
			this.y--;
		}
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
