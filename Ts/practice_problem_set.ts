// 1. write a Typescript fucntion to calculte the factorial of a number with proper type annotations
function factorial(num: number): number {
  if (num == 0 || num == 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(8));

// 2. Define a function that accepts a user object with name, age, and emil and return a formatted string
interface UserData {
  name: string;
  age: number;
  email: string;
}

function formatUser(user: UserData): string {
  return `User : ${user.name} (${user.age}yrs) can be contacted via ${user.email}`;
}

const user: UserData = {
  name: "Alice",
  age: 20,
  email: "aliceagamil.com",
};

console.log(formatUser(user));

// 3. Calculate Total Price: write a TypeScript function that calculate the total price of an array of product object. Each product has a price and quantilty.
interface ProductData {
  price: number;
  quantity: number;
}

function calculateTotal(product: ProductData[]): number {
  return product.reduce(
    (total, product) => total +  product.price * product.quantity,
    0
  );
}

let cart: ProductData[] = [
    { price: 100, quantity: 2 },
    { price: 500, quantity: 3 }
]

console.log(calculateTotal(cart));


//4. Define a union type for a Vehicale that can either be Car or Bike with different properties.
//Write a function to log details based on the vehicle type.

type carData = {
  type: 'car';
  make: string;
  model: string;
  year: number;
};

type bikeData = {
  type: 'bike';
  brand: string;
  cc: number;
};

type VehicleData = bikeData | carData;

function getVehicleDetails(vehicle: VehicleData){
  if(vehicle.type == 'car'){
    console.log(`Car: ${vehicle.make}, ${vehicle.model}, ${vehicle.year}`);
  } else{
    console.log(`Bike : ${vehicle.brand}, CC: ${vehicle.cc}`);
  }
}

let myCarData: VehicleData = {
  type: 'car',
  make: 'Tesla',
  model: 'Model 1',
  year: 2024
}

let myBikeData : VehicleData = {
  type: 'bike',
  brand: 'hero',
  cc: 250
}

getVehicleDetails(myCarData);
getVehicleDetails(myBikeData);