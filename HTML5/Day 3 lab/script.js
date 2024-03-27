var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;
canvas.style.border = '1px solid white';
var context = canvas.getContext('2d');
var gradient = context.createLinearGradient(0 , 0 , 0 , canvas.height);
gradient.addColorStop(0 , "deepskyblue");
gradient.addColorStop(.5 , "white");
gradient.addColorStop(1 , "green");


context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);


context.beginPath();
context.moveTo(canvas.width / 3, canvas.height / 2);
context.lineTo(canvas.width / 3, 50);
context.closePath();
context.strokeStyle = 'black';
context.stroke();


context.beginPath();
context.moveTo(canvas.width / 3, 50);
context.lineTo((canvas.width / 3) + 200, 50);  
context.closePath();
context.stroke();


context.beginPath();
context.moveTo((canvas.width / 3) + 200, 50);
context.lineTo((canvas.width / 3) + 200, 170); 
context.closePath();
context.strokeStyle = 'black';
context.stroke();