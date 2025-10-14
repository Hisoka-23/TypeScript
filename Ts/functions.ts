//Regular functions
function add(a: number, b: number): number{
    return a + b;
}

console.log(add(2, 2));

//function expression
const divide = function(a: number, b: number): number{
    return a / b;
}

console.log(divide(6, 2));

//arrow functions
const multiple = (a: number, b: number): number => {
    return a * b;
}

const multiple1 = (a: number, b: number): number => a * b;


console.log(multiple(6, 2));

//optional & default parameters
function greet(username: string, greeting?: string): string{
    // if(!greeting) {
    //     return '';
    // }
    // return greeting + ' ' + username;
    //return `${greeting ? greeting : ''}${username}`;
    return greeting ? `${greeting} & {username}` : `Hi, ${username}`;//ternary operator
}

console.log(greet('prakash'));

// --default parameters
function greet1(username: string, greeting: string = 'Hi'): string{
    // return greeting + ' ' + username;
    return `${greeting} ${username}`;
}

console.log('Greet1: ',greet1('prakash', 'Hey'));

//fuction overloading
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number{
    return value.length;
}

console.log(getLength('prakash'));
console.log(getLength([1, 2, 3]));

//Rest parametersss
function sum(...numbers: number[]): number{
    // return numbers.reduce((total, num) => {
    //     return total + num;
    // }, 0);

    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5, 5));

function greet12(greeting: string, ...names: string[]):void{
    names.forEach((name)=> {
        console.log(`${greeting}, ${name}`);
    });
}

greet12("hello", 'prakash', 'gojo');