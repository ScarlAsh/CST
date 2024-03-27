var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;
var c = canvas.getContext('2d');

//line
// c.moveTo(100, 100);
// c.lineTo(200, 100);
// c.lineCap = 'round';
// c.strokeStyle = 'red';
// c.stroke();
// c.beginPath();
// c.moveTo(100, 100);
// c.lineTo(200, 100);
// c.lineWidth = 10;
// c.stroke();

//arc
// c.beginPath();
// c.arc(400, 100, 20, 0, 2 * Math.PI);
// c.stroke();
// c.fillStyle = 'yellow';
// c.fill();

//rect
// c.beginPath();
// c.rect(200, 200, 200, 200);
// c.stroke();
// c.fillStyle = 'yellow';
// c.fill();
// c.strokeRect(200, 200, 200, 200);

// c.fillRect(200, 200, 200, 200);

// c.stroke();
// c.rect(0, 0, canvas.width, canvas.height);
// c.fillStyle = 'white';
// c.fill();

// c.strokeRect(200, 200, 200, 200);
// var clearBtn = document.getElementById('clear');
// clearBtn.onclick = function () {
//   c.clearRect(0, 0, canvas.width, canvas.height);
// };
// var drawBtn = document.getElementById('drawCircle');
// canvas.onclick = function (e) {
//   c.beginPath();
//   c.arc(e.x, e.y, 20, 0, 2 * Math.PI);
//   c.stroke();
//   c.fillStyle = 'yellow';
//   c.fill();
// };
// c.fillStyle = 'red';
// c.font = '30px cursive';
// c.strokeText('HTML5', 200, 200);

// var imgObj = new Image();
// imgObj.src = '/image/cars.jpg';
// imgObj.width = 200;
// imgObj.height = 200;
// imgObj.onload = function () {
//   c.drawImage(imgObj, 100, 100, 200, 200);
// };
c.save();
var linearC = c.createLinearGradient(0, 0, 200, 200);
linearC.addColorStop(0, 'red');
linearC.addColorStop(0.5, 'blue');
linearC.addColorStop(1, 'green');

c.fillStyle = linearC;

// c.fillRect(0, 0, 300, 300);

// c.fillRect(0 + 100, 0 + 100, 100, 100);

// c.scale(2, 2);
c.translate(canvas.width / 2, canvas.height / 2);

c.fillRect(0, 0, 100, 100);
c.rotate(270 * (Math.PI / 180));
c.restore();
c.fillRect(0, 0, 100, 100);
