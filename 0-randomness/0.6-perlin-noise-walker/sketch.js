class Walker {
	constructor() {
		this.tx = 0;
		this.ty = 10000;
		this.x = 320;
		this.y = 120;
	}

	show() {
		stroke(0);
		point(this.x, this.y);
	}

	step() {
		// Either variate position

		// this.x = map(noise(this.tx), 0, 1, 0, width);
		// this.y = map(noise(this.ty), 0, 1, 0, height);
		
		// Or variate step size
		
		this.x += map(noise(this.tx), 0, 1, -1, 1);
		this.y += map(noise(this.ty), 0, 1, -1, 1);

		// Step forward in time
		this.tx += 0.01;
		this.ty += 0.01;
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
