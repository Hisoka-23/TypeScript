class Person {
    public name: string;
    age: number;

    constructor(name: string, age?: number){
        this.name = name;
        this.age = age || 0;
    }

    greet(): string{
        return `Hello, my name is ${this.name}, and I'm ${this.age}yrs old`;
    }
}

const personData = new Person('Diya', 19);

console.log(personData.greet());
console.log(personData.name);

/*
access modifiers (public, private, protected)

public: Accessible from anywhere. this is the default if no modifier is specified.
private: Accessible only within the class.
protected: Accessible within the class and its subclasses.
*/

class CarInfo{
    public make: string;
    private model: string;
    protected year: number

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getModel(): string{
        return this.model;
    }

}

const newCar = new CarInfo('BMW', 'M4', 2025);
console.log(newCar.getModel());
//console.log(newCar.model);


//inheritance
class Animal{// parent class

    constructor(protected name: string){

    }

    makeSound(): void{
        console.log('Some generic sound...');
    }

}

class Dog extends Animal {// child class
    
    constructor(name: string){
        super(name);
    }

    // makeSound(): void {
    //     console.log('Woof! Woof!');
    // }

}

const dog = new Dog('Puppy');
dog.makeSound();

// Abstract class
abstract class Shape {

    abstract getArea(): number; // abstract method, must be implemented bt subclasse

    printAreat(): void {
        console.log(`The area is ${this.getArea()}`);
    }

}

class Reactangle extends Shape {

    constructor(private width: number, private height: number){
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }

}

const rect = new Reactangle(5, 10);
rect.printAreat();

//setters & getters
class Circle {
    private _radius: number;

    constructor(radius: number){
        this._radius = radius;
    }

    get radius(): number {
        return this._radius
    }

    set radius(value: number){
        if(value <= 0){
            throw new Error('Radius must be positive');
        }
        this._radius = value;
    }

}

const circle = new Circle(10);
console.log(circle.radius);
circle.radius = 12;
console.log(circle.radius);
// circle.radius = -5;
// console.log(circle.radius);

