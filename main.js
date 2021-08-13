var canvas;
var ctx;

function init() {
    canvas =document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    var cellSize=ctx.canvas.width/8;
    var count = 0;
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            ctx.fillStyle = count%2==0 ? "black" : "white"; 
            ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
            count++;
        }
        count++;
    }
}