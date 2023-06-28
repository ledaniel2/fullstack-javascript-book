class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

let myRectangle = new Rectangle(10, 20);
console.log(myRectangle.area());  // '200'

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  perimeter() {
    return this.height * 4;
  }
}

let mySquare = new Square(5);
console.log(mySquare.area());       // '25' (from the parent Rectangle class)
console.log(mySquare.perimeter());  // '20' (from the Square class)
