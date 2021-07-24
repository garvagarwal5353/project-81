var canvas=document.getElementById("mycanvas");
console.log(canvas)
ctx=canvas.getContext("2d")
var color="darkblue"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=1
ctx.rect(150,143,430,200);
ctx.stroke()

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY - canvas.offsetTop;
    circle(mouse_x,mouse_y)
}
function circle(mouse_y,mouse_x){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=3
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke()  
}