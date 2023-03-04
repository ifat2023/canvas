
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



