var canvas;
var ctx;

function init() {
    canvas =document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.FillRect(0,0,ctx.canvas.width,ctx.canvas.height);
}