
//Ex1.

let Square = document.getElementById("Square");


let context = Square.getContext("2d")

let window_height= window.innerHeight;
let window_width = window.innerWidth;

Square.width =  300; 
Square.height = 300;

context.fillStyle = 'black';
context.fillRect(10,10,280,280);

context.fillStyle = 'white';
context.fillRect(50,50,200,200);

context.fillStyle = 'gray';
context.fillRect(60,60,180,180);

context.fillStyle = 'white';
context.fillRect(70,70,160,160);



//Ex2.
let circle = document.getElementById("circle");

let ctxt = circle.getContext("2d")

circle.width = 300; 
circle.height = 300;

/*circle.width =  window_width; 
circle.height =  window_height;*/

ctxt.beginPath();
ctxt.strokeStyle = "red";
ctxt.lineWidth = 7;
ctxt.arc(150,145,80,0,2*Math.PI);
ctxt.stroke();
//ctxt.closepath();

//Ex3.
let rectangles  = document.getElementById("rectangles");

let ct = rectangles.getContext("2d")

rectangles.width = 300; 
rectangles.height = 300;

ct.fillStyle = 'red';
ct.fillRect(30,30,170,170);

ct.fillStyle = 'blue';
ct.globalAlpha = 0.5;
ct.fillRect(100,100,170,170);

//Ex4.

let Triangle  = document.getElementById("Triangle");

let ctx = Triangle.getContext("2d")

Triangle.width = 300; 
Triangle.height = 300;

ctx.beginPath();
ctx.moveTo(70, 70);
ctx.lineTo(70,200);
ctx.lineTo(200, 200);
ctx.closePath();

ctx.lineWidth = 30;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "black";
ctx.fill();

//Ex5.

let fun  = document.getElementById("fun");

let tx = fun.getContext("2d")

fun.width = 300; 
fun.height = 300;

tx.beginPath();
tx.lineWidth = 5;
tx.arc(150,145,90,0,2*Math.PI);
tx.stroke();

tx.beginPath();
tx.lineWidth = 3;
tx.arc(120,120,10,0,2*Math.PI,true);
tx.stroke();

tx.beginPath();
tx.lineWidth = 3;
tx.arc(180,120,10,0,2*Math.PI,true);
tx.stroke();

tx.beginPath();
tx.lineWidth = 3;
tx.arc(150,180,35,0,Math.PI,false);
tx.stroke();

//Ex6.

let diagonal  = document.getElementById("diagonal");

let x = diagonal.getContext("2d")

diagonal.width = 300; 
diagonal.height = 300;

x.beginPath();
x.fillStyle = "white";
x.arc(25,25,20,0,2*Math.PI,true);
x.stroke();
x.fill();

x.beginPath();
x.fillStyle = "#d4d4d4";
x.arc(75,75,20,0,2*Math.PI,true);
x.stroke();
x.fill();

x.beginPath();
x.fillStyle = "#aaaaaa";
x.arc(125,125,20,0,2*Math.PI,true);
x.stroke();
x.fill();

x.beginPath();
x.fillStyle = "#7f7f7f";
x.arc(175,175,20,0,2*Math.PI,true);
x.stroke();
x.fill();

x.beginPath();
x.fillStyle = "#555555";
x.arc(225,225,20,0,2*Math.PI,true);
x.stroke();
x.fill();

x.beginPath();
x.fillStyle = "black";
x.arc(275,275,20,0,2*Math.PI,true);
x.stroke();
x.fill();