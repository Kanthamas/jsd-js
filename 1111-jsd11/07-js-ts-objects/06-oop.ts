// Public API for all animals
interface IAnimal {
	name: string;
	speak(): void;
}

// Land animals
interface ILandAnimal extends IAnimal {
	move(): void;
}

// Sea animals
interface ISeaAnimal extends IAnimal {
	color: string;
	move(): void;
}

// Base class
class Animal implements IAnimal {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}

	speak(): void {
		console.log(`${this.name} makes a sound`);
	}
}

// Land animal
class LandAnimal extends Animal implements ILandAnimal {
	move(): void {
		console.log(`${this.name} walks on land`);
	}
}

// Cat
class Cat extends LandAnimal {
	speak(): void {
		console.log(`${this.name} says Meow`);
	}
}

// Sea animal
class SeaAnimal extends Animal implements ISeaAnimal {
	public color: string;

	constructor(name: string, color: string) {
		super(name);
		this.color = color;
	}

	move(): void {
		console.log(`${this.name} swims in water`);
	}
}

// Fish
class Fish extends SeaAnimal {
	speak(): void {
		console.log(`${this.name} (color: ${this.color}) blubs silently`);
	}
}

// Usage
const kitty: ILandAnimal = new Cat("Kitty");
kitty.speak();
kitty.move();

const nemo: ISeaAnimal = new Fish("Nemo", "orange");
nemo.speak();
nemo.move();
