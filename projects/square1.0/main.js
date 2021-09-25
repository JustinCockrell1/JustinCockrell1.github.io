var canvas;
var ctx;
var deathsound;
var winsound;
var winsong;
var gameInProgress=false;
var seconds = 0;
var timerInterval;

function getRect(x, y, w, h) {

	return {
		left: x,
		right: x+w,
		top: y,
		bottom: y+h
	};
}

function startGame() {
	document.getElementById("menu").hidden=true;
	document.getElementById("canvas").hidden=false;
	gameInProgress=true;
		game.currentLevelNum=0;
	game.start();

	window.requestAnimationFrame(draw);
	timerInterval = window.setInterval(timer, 500);
}

function timer() {
	seconds+=.5;
	//console.log(seconds);
}

function restartGame() {
	document.getElementById("finishedGame").hidden=true;
		document.getElementById("canvas").hidden=true;
			document.getElementById("menu").hidden=false;
			winsong.load();
}

function Player(x, y, name) {
	this.x = x;
	this.y = y;
	this.dir="null";
	this.speed=1;
	this.size=8;
	this.name=name;
	this.blockedLeft=false;
	this.blockedRight=false;
	this.blockedDown=false;
	this.blockedUp=false;

	this.kill = function() {
		deathsound.play();
		game.getCurrentLevel().start();
	}

	this.getBoundingBox = function() {
		return getRect(this.x, this.y, this.size, this.size);
	}

	this.draw = function() {
	var myImage = new Image();
	myImage.src = "assets/Bob.jpg";
	myImage.width=24;
	myImage.height=24;
	ctx.drawImage(myImage, this.x*3, this.y*3);
	ctx.strokeStyle="black";
	ctx.strokeRect(this.x*3, this.y*3, this.size*3, this.size*3);
		//drawShape(this.x, this.y, this.size, this.size, "red");
		ctx.font="10px Arial";
        ctx.strokeText(this.name, this.x*3, this.y*3-2);
	}

	this.moveLeft = function(speed) {
		
		if(!this.blockedLeft && this.getBoundingBox().left>0) {
			this.x--;
			return true;
		}
	 return false;

	
		
	}
	this.moveRight = function(speed) {
		if(!this.blockedRight && this.getBoundingBox().right<200) {
			this.x++;
			return true;
		}
		return false;
	}
	this.moveDown = function(speed) {
		 if(!this.blockedDown && this.getBoundingBox().bottom<200) {
 			this.y++;
 			return true;
		 }
		 return false;
	}
	this.moveUp = function(speed) {
		if(!this.blockedUp && this.getBoundingBox().top>0) {
			this.y--;
			return true;
		}
		return false;
	}

	this.movement = function() {
		for(var i = 0; i < this.speed; i++)
		{
		this.blockedLeft=false;
		this.blockedRight=false;
		this.blockedDown=false;
		this.blockedUp=false;

		game.getCurrentLevel().updateBlocked(this.getBoundingBox());
		if(this.dir=="left") {
			this.moveLeft(this.speed);
		}
		else if(this.dir=="right") {
			this.moveRight(this.speed);
		}
		else if(this.dir=="up") {
			this.moveUp(this.speed);
		}
		else if(this.dir=="down") {
			this.moveDown(this.speed);
		}
		this.collisions();
		}
	}

	this.collisions = function() {
//Element Collisions
var playerRect = this.getBoundingBox();
var elementRect;
		for(var i = 0; i < game.getCurrentLevel().elementCount; i++)
		{
			
			elementRect = game.getCurrentLevel().elements[i].getBoundingBox();
			if(game.getCurrentLevel().elements[i].deadly) {
			if(playerRect.bottom>elementRect.top&&playerRect.top<elementRect.bottom&&playerRect.left<elementRect.right&&playerRect.right>elementRect.left) {
				this.kill();
			}
		}

	}
elementRect = game.getCurrentLevel().finishPoint.getBoundingBox();
if(playerRect.left<elementRect.right&&playerRect.right>elementRect.left&&playerRect.bottom>elementRect.top&&playerRect.top<elementRect.bottom) {
	//Start new Level
		game.nextLevel();
}



	}

	this.main = function() {
			this.movement();
			this.collisions();
		this.draw();


	}
}



function Element(x, y, w, h, deadly, dynamic, dir, motionCount, speed, color) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = speed;
	this.deadly=deadly;
	this.color=color;
	this.dynamic = dynamic;
	this.dir=dir;
	this.motionCount=motionCount;
	this.count = 0;
	

	this.draw = function() {
		drawShape(this.x, this.y, this.w, this.h, this.color);
	}

	this.getBoundingBox = function() {
		return getRect(this.x, this.y, this.w, this.h);
	}

	this.moveDown = function() {
		if(this.getBoundingBox().bottom==p1.getBoundingBox().top && this.getBoundingBox().right>p1.getBoundingBox().left&&this.getBoundingBox().left<p1.getBoundingBox().right &&!this.deadly) {
			if(!p1.moveDown(1)) p1.kill();
		}
		this.y+=1;
	}
	this.moveUp = function() {
		if(this.getBoundingBox().top==p1.getBoundingBox().bottom && this.getBoundingBox().right>p1.getBoundingBox().left&&this.getBoundingBox().left<p1.getBoundingBox().right &&!this.deadly) {
			if(!p1.moveUp(1)) p1.kill();
		}
		this.y-=1;
	}
	this.moveLeft = function() {
		if(this.getBoundingBox().left==p1.getBoundingBox().right && this.getBoundingBox().top<p1.getBoundingBox().bottom&&this.getBoundingBox().bottom>p1.getBoundingBox().top &&!this.deadly) {
			if(!p1.moveLeft(1)) p1.kill();
		}
		this.x-=1;
	}
	this.moveRight = function() {
		if(this.getBoundingBox().right==p1.getBoundingBox().left && this.getBoundingBox().top<p1.getBoundingBox().bottom&&this.getBoundingBox().bottom>p1.getBoundingBox().top &&!this.deadly) {
			if(!p1.moveRight(1)) p1.kill();
		}
		this.x+=1;
	}

	this.update = function() {
		if(this.count==Math.round(this.motionCount/this.speed)) {
			if(this.dir=="up") this.dir="down";
			else if(this.dir=="down") this.dir="up";
			else if(this.dir=="right") this.dir="left";
			else if(this.dir=="left") this.dir="right";
			this.count=0;
		}
		if(this.dynamic)
		{
	


		//	else if(this.getBoundingBox().top!=p1.getBoundingBox().bottom)
		for(var i = 0; i < this.speed; i++)
		{
			game.getCurrentLevel().updateBlocked(p1.getBoundingBox());
		if(this.dir=="up") this.moveUp();
		else if(this.dir=="down") this.moveDown();
		else if(this.dir=="left") this.moveLeft();
		else if(this.dir=="right") this.moveRight();
}
this.count++;
		
	//console.log("Count: " + this.count + " motionCount: " + this.motionCount + " Speed: " + this.speed);


	}
	}
}

function TextElement(text, x, y) {
	this.text=text;
	this.x=x;
	this.y=y;
}

function ElementRegistry() {
	this.elements = [];
	this.elementCount = 0;
	this.textElement = [];
	this.textElementCount = 0;
	this.startPoint;
	this.finishPoint;

	this.addElement = function(x, y, w, h, deadly, color) {
		this.elements[this.elementCount] = new Element(x, y, w, h, deadly, false, "null", 0, 0, color);
		this.elementCount++;
	}

	this.addDynamicElement = function(x, y, w, h, deadly, dir, motionCount, speed, color) {
		this.elements[this.elementCount] = new Element(x, y, w, h, deadly, true, dir, motionCount, speed, color);
		this.elementCount++;
	}

	this.setFinishPoint = function(x, y, color) {
		this.finishPoint = new Element(x, y, 12, 12, false, false, "null", 0, 0, color);
		
	}
	this.setStartPoint = function(x, y, color) {
		this.startPoint = new Element(x, y, 12, 12, false, false, "null", 0, 0, color);
		
	}
	this.addText = function(text, x, y) {
		this.textElement[this.textElementCount]=new TextElement(text, x, y);
		this.textElementCount++;
	}


	this.update = function() {
		for(var i = 0; i < this.elementCount; i++) {
			this.elements[i].update();
		}
	}

this.start = function() {
			p1.x = this.startPoint.x+2;
			p1.y = this.startPoint.y+2;
			p1.dir="null";
}

	this.drawElements = function() {
		for(var i = 0; i < this.elementCount; i++) {
			this.elements[i].draw();
		}
		for(var i = 0; i < this.textElementCount; i++) {
			ctx.font="15px Arial";
			ctx.fillText(this.textElement[i].text, this.textElement[i].x*3, this.textElement[i].y*3);
			//ctx.fillText("hello", 10, 10);
		}
		//this.startPoint.draw();
		this.finishPoint.draw();
	}

	this.updateBlocked = function(playerRect) {

		for(var i = 0; i < this.elementCount; i++) {
			var elementRect = this.elements[i].getBoundingBox();

			if(!this.elements[i].deadly)
			{
			if(playerRect.bottom==elementRect.top && playerRect.right > elementRect.left && playerRect.left < elementRect.right) {
				p1.blockedDown=true;
			}

			if(playerRect.top==elementRect.bottom && playerRect.right > elementRect.left && playerRect.left < elementRect.right) {
				p1.blockedUp=true;
			}

			if(playerRect.left==elementRect.right && playerRect.top<elementRect.bottom&&playerRect.bottom>elementRect.top) {
					p1.blockedLeft=true;
			}
		
			if(playerRect.right==elementRect.left && playerRect.top<elementRect.bottom&&playerRect.bottom>elementRect.top) {
					p1.blockedRight=true;
			}
			}
	



		}
	}
}

function Level() {
	this.levels = [];
	this.levelNum = 0;
	this.currentLevelNum = 0;
	this.started=false;
	this.addLevel =  function(newLevel) {
		this.levels[this.levelNum]=newLevel;
		this.levelNum++;
	}
	this.getCurrentLevel = function() {
		return this.levels[this.currentLevelNum];
	}
	this.start = function() {
		this.getCurrentLevel().start();
	}
	this.update = function() {
			this.getCurrentLevel().update();
			this.getCurrentLevel().drawElements();
			p1.main();
	}

	this.nextLevel = function() {
		winsound.play();
		if(this.currentLevelNum<this.levelNum-1)
		{
		this.currentLevelNum++;
		this.getCurrentLevel().start();
		}
		else {
			document.getElementById("canvas").hidden=true;
			document.getElementById("finishedGame").hidden=false;
			gameInProgress=false;
			p1.x=0;
			p1.y=0;
			//winsong.play();
			document.getElementById("seconds").innerHTML="You completed the game in " + seconds + " seconds.";
			seconds = 0;
			window.clearInterval(timerInterval);
		}
	}
}

var p1;

var game;
function init() {
	console.log("init");
p1 = new Player(0, 0, "Bob");
game = new Level();
	deathsound = new Audio("assets/oof.mp3");
	winsound = new Audio("assets/ding.mp3");
	//winsong = new Audio("assets/WinMusic.mp3");
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

	levelRegistry();
	//game.start();
	//game.nextLevel();

//window.requestAnimationFrame(draw);

}


function draw() {
	ctx.fillStyle="white";
	ctx.fillRect(0, 0, 600, 600);
	ctx.strokeStyle="black";
	ctx.strokeRect(0, 0, 600, 600);

	game.update();
//ctx.font="30px Arial";
//ctx.strokeText("Hello", 200, 200);
if(gameInProgress)
	window.requestAnimationFrame(draw);
}

function drawShape(x, y, w, h, color) {
	ctx.fillStyle=color;
	ctx.fillRect(x*3, y*3, w*3, h*3);
	ctx.strokeStyle="black";
	ctx.strokeRect(x*3, y*3, w*3, h*3);
}


window.addEventListener("keydown", function(e){
	var key = e.keyCode;
	//alert(key);
	if(key==37||key==65) {p1.dir="left";}
		else if(key==38||key==87) {p1.dir="up";e.preventDefault();}
			else if(key==39||key==68) {p1.dir="right";}
				else if(key==40||key==83) {p1.dir="down";e.preventDefault();}

});


window.addEventListener("keyup", function(e){
	var key = e.keyCode;
	//alert(key);
	if((key==37||key==65) && p1.dir=="left") {p1.dir="null";}
		else if((key==38||key==87) && p1.dir=="up") {p1.dir="null";}
			else if((key==39||key==68) && p1.dir=="right") {p1.dir="null";}
				else if((key==40||key==83) && p1.dir=="down") {p1.dir="null";}

});

window.addEventListener("mouseclick", function(e){

});


