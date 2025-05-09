let a: String = "HI";

let b: Number = 23.45;

function returnSum(a: number, b: number): number {
  return a + b;
}

//classes

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

const greet = new Greeter("Hi there! What is happening?");

console.log(greet.greet());
