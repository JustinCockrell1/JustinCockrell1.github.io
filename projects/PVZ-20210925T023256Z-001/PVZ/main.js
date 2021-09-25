var canvas;
var ctx;

var p1; 
var p2;
var structures = new StructureRegistry();
var nathan = new StructureRegistry();

function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	/*ctx.canvas.width = window.innerWidth-100;
	ctx.canvas.height = window.innerHeight-100;*/
	ctx.canvas.width=50*14+50*2+50*14+40;
	ctx.canvas.height=window.innerHeight-100;
	
	initStructures();
	
	p1 = new Player(20,20,1);
	p2= new Player(20+50*16,20,-1);
	
	p2.grid.x=13;
	
	window.requestAnimationFrame(gameloop);
}

function gameloop() {
	
	ctx.fillStyle="#186193";
	ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
	
	p1.tick();
	p2.tick();
	p1.grid.render(p1.x,p1.y);
	p2.grid.render(p2.x,p2.y);
	p1.projectiles.render();
	p2.projectiles.render();
	p1.render();
	p2.render();
	
	window.requestAnimationFrame(gameloop);
}


function evaluatePassword(player) {
		var password = document.getElementById("p"+player+"password").value;
		var arsenal;
		arsenal = structures;
		if(password=="1356") {
			arsenal = nathan;
		}
		
		if(player==1) {
			p1.arsenal=arsenal;
		}
		else if(player==2) {
			p2.arsenal=arsenal;
		}
	
	
	
	document.getElementById("p"+player+"selection").hidden=true;
	document.getElementById("p"+player+"password").value="";
}


document.addEventListener("keydown", function keyDown(e) {
	var key = e.keyCode;
	
	//65 87 68 83 Player 1 keys z-90,x-88,r-82
	if(key==65) {
		p1.grid.moveLeft();
	}
	else if(key==87) {
		p1.grid.moveUp();
	}
	else if(key==68) {
		p1.grid.moveRight();
	}
	else if(key==83) {
		p1.grid.moveDown();
	}
	else if(key==69) {
		p1.addStructure();
	}
	else if(key==90) {
		if(p1.selectedStructure > 0)p1.selectedStructure--;
		else p1.selectedStructure = p1.arsenal.sNum-1;
	}
	else if(key==88) {
		if(p1.selectedStructure < p1.arsenal.sNum-1)p1.selectedStructure++;
		else p1.selectedStructure = 0;
	}
	else if(key==82) {
		document.getElementById("p1selection").hidden=false;
	}
	//79 - 0
	//38,38,39,40 p-80
	
	if(key==37) {
		p2.grid.moveLeft();
	}
	else if(key==38) {
		p2.grid.moveUp();
	}
	else if(key==39) {
		p2.grid.moveRight();
	}
	else if(key==40) {
		p2.grid.moveDown();
	}
	else if(key==79) {
		p2.addStructure();
	}
	else if(key==75) {
			if(p2.selectedStructure > 0)p2.selectedStructure--;
		else p2.selectedStructure = p2.arsenal.sNum-1;
	}
	else if(key==76) {
		if(p2.selectedStructure < p2.arsenal.sNum-1)p2.selectedStructure++;
		else p2.selectedStructure = 0;
	}
	else if(key==80) {
		document.getElementById("p2selection").hidden=false;
	}
	//75 76
});
document.addEventListener("keyup", function keyUp(e) {
	var key = e.keyCode;
});