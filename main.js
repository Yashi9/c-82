var MouseEvent = "";
var last_position_of_x ,last_position_of_y;

canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "";
width_of_line = "" ;
radius = "";

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e) 
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    MouseEvent = "mousedown";
}
canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e) 
{  
     color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    MouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e) 
{   
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    MouseEvent = "mouseup";
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e) 
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(MouseEvent == "mousedown")
    {
        console.log("Current position of x and y cordinates =");
        console.log("x = "  + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;


}
function clear_area()
{   
    ctx.clearRect(0 ,0 , ctx.canvas.width , ctx.canvas.width );

}



