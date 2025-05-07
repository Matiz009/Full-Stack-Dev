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





while (turn < 100000) {
  let randomNumber = Math.floor(Math.random() * 70) + 1;
  console.log("Random Number: " + randomNumber);
  checkVoteEligibility(randomNumber); //You can cast your vote.
  turn++;
}

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



