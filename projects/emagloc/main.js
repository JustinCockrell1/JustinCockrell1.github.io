var canvas;
var ctx;
var game;

var player;
var level=0;
var count=0;
var running = true;

var mouse = {
	x:0,
	y:0,
	down:false
};

var ID = {	
basicEnemy: 0,
fastEnemy: 1,
smartEnemy: 2,
bullet: 3
};

function init() {
	//Initializing Global Variables
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	startGame();
	
	//Event handlers
	window.addEventListener("keydown",keyDown);
	window.addEventListener("keyup",keyUp);
	window.addEventListener("mousedown", mouseDown);
	window.addEventListener("mouseup", mouseUp);
	window.addEventListener("mousemove", mouseMove);
	
	window.requestAnimationFrame(gameLoop);
}

function startGame() {
		game = new Game();
		player=new Player(100, 10);
		level=0;
		count=0;
}

function nextLevel() {
game.addObject(new BasicEnemy(Math.round(Math.random()*400+50), Math.round(Math.random()*400+50), 50, 50));
	if(level%3==0) {
		game.addObject(new BasicEnemy(Math.round(Math.random()*400+50), Math.round(Math.random()*400+50), 50, 50));
	}
	if(level%5==0){
		game.addObject(new SmartEnemy(100, 400, 0, 0));
	}
	if(level%6==0) {
		game.addObject(new FastEnemy(400, 50, 50, 50));
	} 

	if(level==1) {
		game.addObject(new BasicEnemy(Math.round(Math.random()*400+50), Math.round(Math.random()*400+50), 50, 50));
		game.addObject(new SmartEnemy(0, 0, 0, 0));
	}
	else if(level==2) {
		game.addObject(new BasicEnemy(Math.round(Math.random()*400+50), Math.round(Math.random()*400+50), 50, 50));
	}
	else if(level==3) {
		game.addObject(new BasicEnemy(Math.round(Math.random()*400+50), Math.round(Math.random()*400+50), 50, 50));
		game.addObject(new FastEnemy(0, 0, 50, 50));
	}
	else if(level==4){
		game.addObject(new BasicEnemy(Math.round(Math.random()*400+50), Math.round(Math.random()*400+50), 50, 50));
		game.addObject(new FastEnemy(100, 0, 50, 50));
	}
	else if(level==5) {
		game.addObject(new BasicEnemy(Math.round(Math.random()*400+50), Math.round(Math.random()*400+50), 50, 50));
		game.addObject(new FastEnemy(300, 100, 50, 50));
		game.addObject(new FastEnemy(500, 250, 50, 50));
	}
}

function gameLoop() {
	if(running) {
		
		if(count>=250) {
			level++;
			count=0;
			nextLevel();
		}
		
	tick();
	render();
	count++;
	}
	
	window.requestAnimationFrame(gameLoop);
}

function r() {
	return Math.round((Math.random()*2)-1)
}

function tick() {
	
	ctx.canvas.width=window.innerWidth-40;
	ctx.canvas.height=window.innerHeight-40;
	
	game.tick();
	player.tick();
	
	if(mouse.down) {
	var x1 = (player.x+(player.w/2))-2;
	var y1 = (player.y+(player.h/2))-2;
	var distance = Distance(mouse.x, x1, mouse.y, y1);
	var x = ((mouse.x-x1)/distance)*20;
	var y =((mouse.y-y1)/distance)*20;
	game.addObject(new Bullet(x1, y1, x+r(), y+r()));
	}
	
	
	if(player.health<=0) {
		startGame();
	}
}
function render() {
	//Background
	ctx.fillStyle="black"
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	game.render();
	player.render();
	
		ctx.font="20px Arial"
	ctx.fillStyle="white";
	ctx.fillText("Level: "+level, 5, 20);
}

function keyDown() {
	var key = event.keyCode;
	switch(key) {
		//65, 87, 68, 83
		case 65:
		player.vx=player.speed*-1;
		break;
		case 87:
		player.vy=player.speed*-1;
		break;
		case 68:
		player.vx=player.speed;
		break;
		case 83:
		player.vy=player.speed;
		break;
	}
}
function keyUp() {
	var key = event.keyCode;
		switch(key) {
		//65, 87, 68, 83
		case 65:
		if(player.vx<0)player.vx=0;
		break;
		case 87:
		if(player.vy<0)player.vy=0;
		break;
		case 68:
		if(player.vx>0)player.vx=0;
		break;
		case 83:
		if(player.vy>0)player.vy=0;
		break;
	}
}

function mouseDown() {
	/*var rect = canvas.getBoundingClientRect();
	var x = Math.round(event.clientX-rect.left);
	var y = Math.round(event.clientY-rect.top);
	var x1 = (player.x+(player.w/2))-2;
	var y1 = (player.y+(player.h/2))-2;
	var distance = Distance(x, x1, y, y1);
	game.addObject(new Bullet(x1, y1, ((x-x1)/distance)*20, ((y-y1)/distance)*20));*/
	
	mouse.down=true;
}

function mouseUp() {
	mouse.down=false;
}

function mouseMove() {
	var rect = canvas.getBoundingClientRect();
	mouse.x = Math.round(event.clientX-rect.left);
	mouse.y = Math.round(event.clientY-rect.top);
}