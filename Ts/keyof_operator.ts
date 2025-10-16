//keyof operator
interface Person12{
    name: string;
    age: number;
    email:string;
}

type PersonKey2 = keyof Person12;

let keys: PersonKey2 = 'name';