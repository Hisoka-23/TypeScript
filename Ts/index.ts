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


//let valArray: [number, string] = [1, 'a'];