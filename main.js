var canvas;
var ctx;
var cellSize;
var whitePieces = [];
var blackPieces = [];
function init() {
    canvas =document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    //Initializing events
    canvas.addEventListener("mousedown", handleMouseClick);
  
    //Initializing the positions of the starting pieces
    for(var i =0; i < 8; i++)
    whitePieces.push(new Piece("pawn", i, 6));
    whitePieces.push(new Piece("rook", 0, 7));
    whitePieces.push(new Piece("knight", 1, 7));
    whitePieces.push(new Piece("bishop", 2, 7));
    whitePieces.push(new Piece("queen", 3, 7));
    whitePieces.push(new Piece("king", 4, 7));
    whitePieces.push(new Piece("bishop", 5, 7));
    whitePieces.push(new Piece("knight", 6, 7));
    whitePieces.push(new Piece("rook", 7, 7));

    for(var i =0; i < 8; i++)
    blackPieces.push(new Piece("pawn", i, 1));
    blackPieces.push(new Piece("rook", 0, 0));
    blackPieces.push(new Piece("knight", 1, 0));
    blackPieces.push(new Piece("bishop", 2, 0));
    blackPieces.push(new Piece("queen", 3, 0));
    blackPieces.push(new Piece("king", 4, 0));
    blackPieces.push(new Piece("bishop", 5, 0));
    blackPieces.push(new Piece("knight", 6, 0));
    blackPieces.push(new Piece("rook", 7, 0));

    drawBoard();
    
}

function drawBoard() {
    //Draw the background
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    cellSize=ctx.canvas.width/8;
    var count = 0;
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            ctx.fillStyle = count%2==0 ? "white" : "black"; 
            ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
            count++;
        }
        count++;
    }
    //Drawing each piece
    for(var i = 0; i < whitePieces.length; i++)
    whitePieces[i].draw("red");
    for(var i = 0; i < blackPieces.length; i++){
        blackPieces[i].draw("blue");
    }
}

function Piece(type, x, y) {
    this.type=type;
    this.x=x;
    this.y=y;

    this.draw = function(color) {
        ctx.fillStyle = color;
        //ctx.fillRect(this.x*cellSize+cel, this.y*cellSize)
        ctx.fillRect(this.x*cellSize+cellSize/4, (7-this.y)*cellSize+cellSize/4, cellSize/2, cellSize/2);
    }
    this.isMove = function(x,y){
        if(this.type=="bishop"){
            var diffX = x-this.x;
            var diffY = y - this.y;
            return (Math.abs(diffX)==Math.abs(diffY)&&diffX!=0);
        }
        else if(this.type=="knight"){
            var diffX = Math.abs(x-this.x);
            var diffY = Math.abs(y - this.y);
            return ((diffX==1&&diffY==2)||(diffX==2&&diffY==1));
        }
        else if(this.type=="rook") {
            var diffX = Math.abs(x-this.x);
            var diffY = Math.abs(y - this.y);
            return ((diffX!=0&&diffY==0)||(diffX==0&&diffY!=0));
        }
        else if(this.type=="queen"){
            var diffX = Math.abs(x-this.x);
            var diffY = Math.abs(y - this.y);
            return (((diffX!=0&&diffY==0)||(diffX==0&&diffY!=0))||(diffX==diffY));
        }
        else if(this.type=="pawn"){

        }
        else if(this.type=="king"){
            var diffX = Math.abs(x-this.x);
            var diffY = Math.abs(y - this.y);
            return (diffX<=1&&diffY<=1);
        }
    }
}



function handleMouseClick(event){
    var offsetX = canvas.getBoundingClientRect().left;
    var offsetY = canvas.getBoundingClientRect().top;
    console.log(Math.floor((event.clientX-offsetX)/cellSize), Math.floor((event.clientY-offsetY)/cellSize));  
}