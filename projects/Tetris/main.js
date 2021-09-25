var canvas;
var ctx;	
var cell_size;
var cell;

var piece;

function Piece(x, y) {
	this.x=x;
	this.y=y;
	this.dir="";
	
	
	this.tick = function() {
		//Make the block fall
			if(this.y < 19 && cell[this.y+1][this.x]==0) {
				this.y++;
			}
			else {
				//The block can no longer move down
				cell[this.y][this.x]=1;
				piece=new Piece(4,-1);
			}
			
			if(this.dir=="left") this.left();
			if(this.dir=="right") this.right();
	
	}
	
	this.right = function() {
			if(this.x < 9 && cell[this.y][this.x+1]==0) {
				this.x++;
			}
	}
	this.left = function() {
		if(this.x>0 && cell[this.y][this.x-1]==0) {
				this.x--;
		}
	}
	
	this.render = function() {
		ctx.fillStyle="red";
		ctx.fillRect(this.x*cell_size, this.y*cell_size, cell_size, cell_size);
	}
}

function init(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	cell_size = (window.innerHeight-60)/20;
	
	piece = new Piece(4, -1);
	
	cell = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
	];
	
	
	window.addEventListener("keydown", keyDown);
	window.addEventListener("keyup", keyUp);
	
	startGame();
}

function startGame() {
	
	
	window.setInterval(gameLoop, 200);
}

function gameLoop() {
tick();
render();
}

function tick() {
	//Update the screen size
	ctx.canvas.width=cell_size*10;
	ctx.canvas.height=cell_size*20;
	piece.tick();


//Moving to the right
}

function render() {
	//Cells
	for(var i = 0; i < 10; i++) {
		for(var j = 0; j < 20; j++) {
			if(cell[j][i]==0)ctx.fillStyle="white";
			else ctx.fillStyle="red";
				
		
			ctx.fillRect(i*cell_size, j*cell_size, cell_size, cell_size);
			ctx.strokeRect(i*cell_size, j*cell_size, cell_size, cell_size);
		}
	}
	
	piece.render();
}

function keyDown() {
	var key = event.keyCode;
	if(key==37)piece.dir="left";
	else if(key==39)piece.dir="right";
}
function keyUp() {
	var key = event.keyCode;
	if(key==37&&piece.dir=="left")piece.dir="";
	else if(key==39&&piece.dir=="right")piece.dir="";
}