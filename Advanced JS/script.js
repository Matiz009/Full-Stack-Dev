//JS
var a = 5; //number

console.log(a); //5

var b = "Micheal"; //string

console.log(b); //Micheal

var c = 12.5; //float
console.log(c); //12.5

var d = true; //boolean
console.log(d); //true

var e = null; //null
console.log(e); //null

var f; //undefined
console.log(f); //undefined

var h;

console.log(h); //undefined

//conditional statements

var age = 18;

if (age >= 18) {
  console.log("You can cast your vote.");
} else {
  console.log("You cannot cast your vote.");
}

var marks = 90;
if (marks >= 90) {
  console.log("You have got A+ grade.");
} else if (marks >= 80) {
  console.log("You have got A grade.");
} else if (marks >= 70) {
  console.log("You have got B grade.");
}

//loops

for (var i = 0; i < 5; i++) {
  console.log(i); //0 1 2 3 4
}

//while loop

var j = 0;

while (j < 5) {
  console.log(j); //0 1 2 3 4
  j++;
}
//do while loop

var k = 0;
do {
  console.log(k); //0 1 2 3 4
  k++;
} while (k < 5);

//functions

function checkVoteEligibility(age) {
  if (age >= 18) {
    console.log("You can cast your vote.");
  } else {
    console.log("You cannot cast your vote.");
  }
}

//what is the difference between [parameter and argument?]

checkVoteEligibility(20); //You can cast your vote.
checkVoteEligibility(16); //You cannot cast your vote.





// cls

5.3

Math.floor(5.4) = 5 

Math.ceil(5.4) = 6


console.log(Math.random() * 1000);



class Student{
    
    constructor(name, age, rollNo){
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`;
    }


}

let ali = new Student("Ali", 20, 101);
let ahmed = new Student("Ahmed", 21, 102);
let asad = new Student("Asad", 22, 103);
let aamir = new Student("Aamir", 23, 104);


console.log(ali.getDetails()); //Name: Ali, Age: 20, Roll No: 101


//primitive data types
//string, number, boolean, null, undefined, symbol, bigint
//string, number, boolean, null, undefined, symbol, bigint

//reference data types
//object, array, function, date, regex, map, set, weakmap, weakset



// arrow function
const add = (a, b) => a + b;

//difference between let and var and const

//let and const are block scoped, var is function scoped

var news = "This is a news headline";
var news = "This is a news headline 2"; // redeclaration is allowed in var

console.log(news); // This is a news headline 2


let news2 = "This is a news headline 3";
news2 = "This is a news headline 4"; // redeclaration is not allowed in let but reassignment is allowed

console.log(news2); // This is a news headline 4


const news3 = "This is a news headline 5";
//news3 = "This is a news headline 6"; // redeclaration is not allowed in const and reassignment is also not allowed
console.log(news3); // This is a news headline 5

const fruits =
["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits.splice(2,0)); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]


