/* generics
   Generics are a way to create components (functions, class or interfaces) that work with different types without losing type safety
*/

function genericIdentity<t>(arg: t): t{
    return arg;
}

console.log(genericIdentity<string>('prakash'));
console.log(genericIdentity<number>(100));
console.log(genericIdentity(true));

//generic interface 
interface KeyPair<T, U>{
    key: any,
    value: any,
}

let keyPairValue: KeyPair<string, number> = {
    key: 'pair',
    value: 10
};

// generic constraints
function getLength<T extends { length: number }>(item: T): number{
    return item.length;
}

console.log(getLength('prakash'));
console.log(getLength([1,2,3,45,6,]));

// generic class
class Box<T>{
    contents: T;

    constructor(value: T){
        this.contents = value;
    }

    getContents(): T{
        return this.contents;
    }
}

const numberBox = new Box(100);
console.log(numberBox.getContents());

const StringBox = new Box('Hello');
console.log(StringBox.getContents());

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    getStacK(): T[]{
        return this.items
    }

}

const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(23);
console.log(numberStack.getStacK());
console.log(numberStack.pop());
console.log(numberStack.getStacK());

const StringStack = new Stack<string>();

StringStack.push('hello');
StringStack.push('hii');
console.log(StringStack.getStacK());
console.log(StringStack.pop());
console.log(StringStack.getStacK());
