const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits.splice(0, 2)); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
