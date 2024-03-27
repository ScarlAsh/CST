var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var colors = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'];
var c = canvas.getContext('2d');
var maxR = 70;
var mouseCoords = {
  x: 0,
  y: 0,
};

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('mousemove', function (e) {
  mouseCoords.x = e.x;
  mouseCoords.y = e.y;
});

function Ball(x, y, r, dx, dy) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.initR = r;
  this.dx = dx;
  this.dy = dy;
  this.color = getRandomColor();

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r >= canvas.height || this.y - this.r <= 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.scale();
    this.draw();
  };

  this.scale = function () {
    if (
      this.x - mouseCoords.x < 50 &&
      this.x - mouseCoords.x > -50 &&
      this.y - mouseCoords.y < 50 &&
      this.y - mouseCoords.y > -50
    ) {
      if (this.r < maxR) {
        this.r += 10;
      }
    } else {
      this.r = this.initR;
    }
  };
}
function createBall(x, y) {
  var x = x || Math.random() * window.innerWidth;
  var y = y || Math.random() * window.innerHeight;
  var r = Math.random() * 5;
  var dx = Math.random() * 4;
  var dy = Math.random() * 4;
  balls.push(new Ball(x, y, r, dx, dy));
}
document.addEventListener('click', function (e) {
  createBall(e.x, e.y);
});

var balls = [];
for (var i = 0; i < 1000; i++) {
  createBall();
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var ball of balls) {
    ball.update();
  }
  requestAnimationFrame(animate);
}

animate();
