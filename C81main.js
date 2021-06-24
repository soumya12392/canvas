var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(500, 500, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    line_width = document.getElementById("line_width").value;
    console.log(line_width);
    radius = document.getElementById("radius").value;
    console.log(radius);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " Y = " + mouse_y);
    circle(mouse_x, mouse_y, color, line_width, radius);
}

function circle(mouse_x, mouse_y, color, line_width, radius) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.arc(mouse_x, mouse_y, radius, 0, 2*Math.PI);
    ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}