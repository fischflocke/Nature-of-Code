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
		// 1st variant 

		/*const choice = floor(random(4));

		switch (choice) {
			case 0:
				this.x++;
				break;
			case 1:
				this.x--;
				break;
			case 2:
				this.y++;
				break;
			case 3:
				this.y--;
				break;
			default:
				console.error("help");
		}*/

		// 2nd variant
		/*const xstep = floor(random(3)) - 1;
		const ystep = floor(random(3)) - 1;

		this.x += xstep;
		this.y += ystep;*/

		// 3rd variant
		const xstep = random(-1, 1);
		const ystep = random(-1, 1);

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
