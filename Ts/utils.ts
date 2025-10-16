export function add2Num(a: number, b: number): number{
    return a + b;
}

export const PI = 3.14;

export class Calculator {
    add(a: number, b: number): number{
        return a + b;
    }

    divide(a: number, b: number): number{
        return a / b;
    }

}

export default function log(message: string):void{
    console.log(message);
}