// Code of the square
console.group("Square");
const sideSquare = 5;
console.log("the sides of the square measure: "+ sideSquare + "cm");

const perimeterSquare = sideSquare * 4;
console.log("the perimeter of the square is: "+ perimeterSquare);

const areaSquare = sideSquare * sideSquare;
console.log("the area of the square is: "+ areaSquare);
console.groupEnd()

//Code of the triangle

console.group("triangle")
const sideTriangle1 = 5;
const sideTriangle2 = 5;
const sideTriangle3 = 5;
const baseTriangle = 10;

console.log("the sides of triangle measure: "
+ sideTriangle1 
+ "cm, "
+ sideTriangle2 
+ "cm, "
+ sideTriangle3 
+ "cm"
);
const heightTriangle = 5.5;
console.log("The height of the triangle is: "+ heightTriangle +" cm")

const perimeterTriangle = sideTriangle1 + sideTriangle2 + sideTriangle3;
console.log("The perimeter of triangle is: " + perimeterTriangle + "cm")

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log("The area of triangle is: "+ areaTriangle + "cm^2")

console.groupEnd()

// Code of circles
console.group("Circulos");
//Radio
const radioCircle = 4;
console.log("The radio of the circle: "+ radioCircle +" cm")

//Diameter
const diamaterCircle = radioCircle * 2;
console.log("The diamater of the circle is: "+ diamaterCircle +" cm")

// PI
const PI = Math.PI;
console.log("The pi of the circle: "+ PI)

// Circumference
const perimeterCircle = diamaterCircle * PI;
console.log("The perimeter of the circle: "+ perimeterCircle +" cm")

// Area 
const areaCircle = (radioCircle * radioCircle) * PI;
console.log("The area of the circle: "+ areaCircle +" cm^2")

console.groupEnd;