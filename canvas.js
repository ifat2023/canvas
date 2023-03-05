
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