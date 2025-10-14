// let a1: number = 1;
// a1 = 10;

// function add2(a: number, b: number): number{
//     return a + b; //type checking
// }

// const y = add2(1, a1);
// console.log(y);

// a1 = y
// console.log(a1);


// Basic types
let num: number = 1234_567_56789;
let num1: bigint = 1234567812345678909n;
console.log('num: ',num);
console.log('num1: ',num);

let character: string = 'Code with prakash';
let isAvailable: boolean = true;

let numArray: number[] = [1,2,3,4,5,6,7];
let stringArray: string[] = ['a', 'b', 'c', 'd', 'e'];

let val: undefined = undefined;

let val1: null = null;

let obj: {name: string, age: number} = { // obj: object
    name: 'ABC',
    age: 10
}

obj = { ...obj, age: 23, name: 'prakash' };
console.log(obj);

//any type
let numVal: any;
numVal = 1;
numVal = 'a';

function testAnyType(val: any){
    console.log(val);
}

//Arrays
let numArray1: number[] = [1,2,3,4,5,6,7];
let stringArray1: string[] = ['a', 'b', 'c', 'd', 'e'];

//stringArray1.forEach(val => val.includes('a'));
//numArray1.forEach(val => val.toFixed(2));

//tuples
let arr: [number, string, boolean, number] = [1, 'Alice', true, 6];

let coordinates3D: [number, number, number] = [10, 10 , 10]; // (x, y, z)axis

//localhost:4200?name=praskhs&phone=980
let useData: [string, number] = ['praksh', 23];

let user;
console.log(user); // undefine

let respone: [number, string] = [200, "Success"] // http-response
respone.push(0);// drawback of typle in ts
console.log(respone);

//enum
// Pascal Case
enum Color {
    //APP_NAME = 'my_app_name',
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color.Blue);

let color: Color = Color.Red;
console.log(color);

//Example - without enum
// const Small = 1;
// const Medium = 2;
// const Large = 3;

// let size = Medium;

enum Size {
    Small = 1,
    Medium,
    Large,
}

// const enum Size {
//     Small = 1,
//     Medium,
//     Large,
// }

let size: Size = Size.Medium;
console.log(size);

//unknown type
let notSure: unknown = 'a';

if(typeof(notSure) === 'number'){
    notSure.toFixed(2);
}else if (typeof(notSure) === 'string'){
    notSure.length;
}

//never type
// function infiniteLoop(): never{
//     while(true){
//         //do something endlessly
//         console.log(1);
//     }
// }

// infiniteLoop();

// function thowError(message: string): never {
//     throw new Error(message);
// }

// thowError('Something went wrong');

//void type
function logMessage(message: string): void {
    console.log(message);
    //void -- return undefined;
}

logMessage("prakash");

//type inference 
let username: string = "PRAKASH";// typescripty infers the type as string

//type assertions
let someValue: any = 'Hello world';
let length: number = (someValue as string).length;
console.log(length);

//union type
let id: string | number | boolean;// id can either be string or a number
id = 'abc';
id = 101;
id = true;

function printId(id: string | number | boolean) {
    console.log(`id: ${id}`);// 'id:' + id
}

printId('abc');
printId(101);
printId(true);

//type narrowing
function printIdFn(id: string | number | boolean){
    if(typeof id === 'string'){
        console.log('id is a string: ', id.toUpperCase());
    }else {
        console.log(`id: ${ id }`);//'id: ' +id 
    }
}

printIdFn('xyz');
printIdFn(1);

//interface
interface Person {
    name: string;
    age: number;
    //greet(): void;
    greet: () => void
}

function greet(){
        console.log('Hi');
}

let person: Person = {
    name: 'abc',
    age: 10,
    // greet(){
    //     console.log('Hi');
    // }
    greet
}

person.greet();

//interface with Function types
interface MathOP {
    (a: number, b: number): number;
}

const add: MathOP = (x, y) => x + y;
const subtract: MathOP = (x, y) => x - y;

console.log("add 2 number : ", add(1, 2));
console.log("subtract 2 number : ", subtract(5, 2));

//type alias

//type AliasName = TypeDefinition;// systax
type UserID = string;

let userId: UserID = 'abc';

type Person1= {
    name: string,
    age: number
}

let person1: Person1 = {
    name: 'abc',
    age: 23
}

console.log(person1.name);

type Id = string | number;

let userId1: Id = 'abc';
let orderId1: Id = 101;

//interface vs type alias
interface User {
    name: string,
    phone?: number
};

//User is the perent classs
interface Customer extends User {
    address: string;
};

//we can use both perent and child
let myCustomer: Customer = {
    name: 'gojo',
    //phone: 123654789,
    address: 'abc'
}

//type --- error duplicate  type identififer

type Vehicle = {
    make: string,
    model?: string
};

//& -> intersection type
type Car = Vehicle & {
    isElectric : boolean,
}

let myCar: Car = {
    make: 'TATA',
    //model: 'TATA PUNCh',
    isElectric: true,
};

type MathOp1 = ( a: number, b: number) => number;
let add1: MathOp1 = (x, y) => x + y;
console.log(2, 2);

type Status = "active" | "inactive" | "pending";

let userStatus: Status = 'active';

type Tree = {
    value: string;
    children?: Tree[];
}

let tree: Tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
            children: [
                { value: 'grandChild', children: []}
            ]
        }
    ]
}

//intersection types
let config: { sever: string, port: number} & { secure: boolean; timeout: number } = {
    sever: 'localhost',
    port: 8080,
    secure: true,
    timeout: 5000
};

//let valArray: [number, string] = [1, 'a'];