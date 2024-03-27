class Polygon
{
    constructor(name = 'polygon')
    {
        this._name = name;
    }
    Area()
    {
        return 'polygon area..';
    }
    toString()
    {
        return `${name}`;
    }
    get name()
    {
        return this._name;
    }
    set name(value)
    {
        _name = value;
    }
}

class Rectangle extends Polygon
{
    constructor( width , height)
    {
        super();
        this._width = width;
        this._height = height;
    }
    toString()
    {
        return super.toString() + `width : ${this._width} , height ${this._height}`;
    }
    Area()
    {
        return this._width * this._height ; 
    }
    set width(value)
    {
        this._width = width;
    }
    get width()
    {
        return this._width ;
    }
    set height(value)
    {
        _height = height;
    }
    get height()
    {
        return this._height;
    }
}

class Square extends Polygon {
    constructor(side) {
        super('Square');
        this.side = side;
    }

    Area() {
        return this.side * this.side;
    }

    toString() {
        return `${super.toString()}, Side: ${this.side}, Area: ${this.Area()}`;
    }
}

class Circle extends Polygon {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    Area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString() {
        return `${super.toString()}, Radius: ${this.radius}, Area: ${this.Area()}`;
    }
}
class Triangle extends Polygon {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    Area() {
        return 0.5 * this.base * this.height;
    }

    toString() {
        return `${super.toString()}, Base: ${this.base}, Height: ${this.height}, Area: ${this.Area()}`;
    }
}


const rectangle = new Rectangle(100, 80);
const square = new Square(100);
const circle = new Circle(50);
const triangle = new Triangle(50, 80);

console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(triangle.toString());

const canvas = document.getElementsByTagName('canvas')[0];
canvas.width = innerWidth /2;
canvas.height = innerHeight / 2;
const ctx = canvas.getContext('2d');
function drawRectangle(rectangle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(10, 10, rectangle.width * 2, rectangle.height * 2);
}

function drawSquare(square) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, square.side * 2, square.side * 2);
}

function drawCircle(circle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(100, 100, circle.radius * 2, 0, 2 * Math.PI);
    ctx.fill();
}

function drawTriangle(triangle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10 + triangle.base * 2, 10);
    ctx.lineTo(10 + triangle.base, 10 + triangle.height * 2);
    ctx.closePath();
    ctx.fill();
}

// Draw each shape on canvas
drawRectangle(rectangle);
setTimeout(()=>drawSquare(square) , 5000);
setTimeout(() => drawCircle(circle), 10000);
setTimeout(() => drawTriangle(triangle), 15000);

