// index signature

interface StringArray{
    [index: number]: string;
}

let array1: StringArray = ['Code', 'with', 'Prakash'];
console.log(array1[3]);

interface Fruit{
    [key: string]: string;
}

const fruitArray: Fruit = {
    apple: 'A fruit',
    banana: 'A yellow fruit',
}

console.log(fruitArray["banana"]);

 