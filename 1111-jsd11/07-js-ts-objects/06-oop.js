class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound`);
	}
}

class LandAnimal extends Animal {
	move() {
		console.log(`${this.name} walks on land`);
	}
}

class Cat extends LandAnimal {
	speak() {
		console.log(`${this.name} says Meow`);
	}
}
const kitty = new Cat("Kitty");
kitty.speak();
kitty.move();

class SeaAnimal extends Animal {
	constructor(name, color) {
		// ✅ must call super(name) before using `this`
		super(name);
		this.color = color;
	}
	move() {
		console.log(`${this.name} swims in water`);
	}
}

class Fish extends SeaAnimal {
	speak() {
		console.log(`${this.name} (color: ${this.color}) blubs silently`);
	}
}

const nemo = new Fish("Nemo", "orange");
nemo.speak();
nemo.move();

