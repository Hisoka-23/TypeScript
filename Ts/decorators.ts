/*
 * what are decorators?
 * Decorators are a special kind of declaration
 * that can be attached to classes, methods, or properties
 * allowing you to modify their behavior in a declarative way.
 * Decorators are widely used in frameworks like Angular
 * to annotate and configure classes and methods.
 * 
 * Decorators provide a way to add metdata to classes, methods, properties, or parameters.
 * this metadata can be used for various purposes, such as:
 * 
 * Documentation: Decorators can descibe the behavior or purpose of a class or mehtod.
 * Framwork Integration: Many Framworks (Like Angular ) use decorators to annotate classes and methods,
 * makting it clear how they should be used.
 * 
 * types:
 * class decorator
 * method decorator
 * accessor & property decorator
 * parameter decorator
 */

import log from "./utils";

//class decorator
function Logger(constructor: Function){
    console.log(`Logging creation of class: ${constructor.name}`);
}

@Logger
class People{
    constructor(public name: string){}
}

const p = new People('Diya');
//console.log(p);

// Method decorators / function
function LoggMethod(targer: Object, propertyKey: string, descriptor: PropertyDescriptor){

    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`Method called: ${propertyKey}`);
        return originalMethod.apply(this, args);
    }

}

class CalcOp {
    @LoggMethod
    add(a: number, b: number): number{
        return a + b;
    }
}

const calc = new CalcOp();
console.log(calc.add(2,2));

// accessor & property decorator
function ReadOnly(target: any, propertyKey: string){
    Object.defineProperty(target, propertyKey, {
        writable: false
    })
}

class Car{
    // @ReadOnly
    // brand: string = 'Toyoto';

    private _brand: string = 'Tesla';

    get brand(){
        return this._brand;
    }

    @ReadOnly
    set brand(value: string){
        this._brand = value;
    }
}

const myCars = new Car();
myCars.brand = 'Tata';
console.log(myCars.brand);


// parameter decorators
function LogParameter(target: object, propertyKey: string, parameterIndex: number){
    console.log(`Parameter in method ${propertyKey} at index ${parameterIndex}`);
}

class UserParam {
    createUser(@LogParameter name: string, @LogParameter age: number){
        console.log(`User: ${name}, Age: ${age}`);
    }
}

const userParam = new UserParam();
userParam.createUser('Diya', 20);

//practice problem: create a method decorator that logs the time taken for the execution of a mehtod
function LogExecutionTime(targer: Object, propertyKey: string, descriptor: PropertyDescriptor){

    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`Execution time for ${propertyKey}: ${end - start}ms`);      
        return result;
    }

}

class MathOps{

    @LogExecutionTime
    multiply(a: number, b: number){
        return a * b;
    }

}

const mathOps = new MathOps();
console.log(mathOps.multiply(2, 5));
