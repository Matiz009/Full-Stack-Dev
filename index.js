let h_1 = document.getElementById("h-1");

h_1.innerHTML = "Hello World!";
h_1.style.color = "red";
h_1.style.fontSize = "50px";

let img = document.getElementById("img");
img.src = "https://www.w3schools.com/w3images/lights.jpg";
img.style.width = "500px";
img.style.height = "500px";

let body = document.getElementById("body");
// body.style.backgroundColor = "black";
/**

i am a comment
 * this is a multi-line comment

 */

let btn = document.getElementById("submit");
btn.addEventListener("click", function () {
  alert("Hello World!");
});

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
