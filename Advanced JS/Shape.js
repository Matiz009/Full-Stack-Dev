const Circle = require("./Circle.js");
console.log(Circle);
class Shape {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log(
      `Drawing shape at (${this.x}, ${this.y}) with width ${this.width} and height ${this.height}`
    );
  }
}
