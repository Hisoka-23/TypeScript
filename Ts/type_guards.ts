// type guards
// typeof
// instanceof
// custom type gurard fn

function printID(id: string | number){
    if(typeof id === 'string'){
        console.log(`id is a string: ${id}`);
    }else{
        console.log(`id is a number: ${id}`);
    }
}

class Dog1{
    bark(){
        console.log("WooF!");
    }
}

class Cat{
    meow(){
        console.log('Meow!');
    }
}

function handlePet(pet: Dog1 | Cat){
    if(pet instanceof Dog1){
        pet.bark();
    } else{
        pet.meow();
    }
}

interface Fish{
    swin(): void;
}

interface Bird{
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swin !== undefined;
}

function move(pet: Fish | Bird){
    if(isFish(pet)){
        pet.swin();
    } else {
        pet.fly();
    }
}

//eg
function isString(value: any): value is string{
    return typeof value === 'string';
}

function checkType(value: string | number){
    if(isString(value)){
        console.log('value is string');
    } else {
        console.log('value is number');
    }
}

checkType('hello');