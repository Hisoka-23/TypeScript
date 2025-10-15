// literal types

//string literal
type orderstatus = "delivered" | "pending" | "cancelled";
let order: orderstatus = "delivered";

let answer: "yes" | "no";
answer = "yes";

//number literal
let count: 0 | 1 | 2;
count = 1;

//boolean literal
let isVisible: true | false;
isVisible = true;

type literalType = "hello" | 2 | "hi" | { name: string; age: number };

type Action = "add" | "update" | "delete";

function takeAction(action: Action) {
  switch (action) {
    case "add":
      console.log("add function");
      break;
    case "update":
      console.log("update fucntion");
      break;
    case "delete":
      console.log("delete function");
      break;
    default:
      console.log("none");
      break;
  }
}

function printStatus(status: 'success' | 'error' | 'loading'): void {
    console.log(`Current state is ${status}`);
}

printStatus('success');
// printStatus('completle');

interface ButtonConfig{
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'green' | 'blue';
}

const btn: ButtonConfig = {
    size: 'medium',
    color: 'red'
}