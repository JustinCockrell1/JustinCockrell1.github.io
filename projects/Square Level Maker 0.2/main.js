var canvas;
var ctx;
var cell_size=3;

function writeLine(message) {
	document.getElementById("output").innerHTML+=message+"<br>";
}

function drawLine(x, y, x1, x2) {
	ctx.beginPath();
	ctx.moveTo(x*3, y*3);
	ctx.lineTo(x1*3, x2*3);
	ctx.stroke();
}

function getRect(x, y, w, h) {
	return {
		left: x,
		right: parseInt(x)+parseInt(w),
		top: y,
		bottom: parseInt(y)+parseInt(h)
	};
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

	

	this.draw = function() {
		drawShape(this.x, this.y, this.w, this.h, this.color);
	}

	this.getBoundingBox = function() {
		return getRect(this.x, this.y, this.w, this.h);
	}




function TextElement(text, x, y) {
	this.text=text;
	this.x=x;
	this.y=y;
}
}
function ElementRegistry() {
	this.name;
	this.elements = [];
	this.elementCount = 0;
	this.textElement = [];
	this.textElementCount = 0;
	this.startPoint = new Element(0, 0, 12, 12, false, false, "null", 0, 0, "blue");
	this.finishPoint = new Element(200-12, 200-12, 12, 12, false, false, "null", 0, 0, "red");;

	this.removeElement = function(id) {
		if(id==this.elementCount) {
			
		
		}
		else {
		for(var i = 0; i < this.elementCount; i++) {
			this.elements[id+i]=this.elements[id+i+1];
		}

	}
	this.elementCount--;
}

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

	this.drawElements = function() {
		for(var i = 0; i < this.elementCount; i++) {
			this.elements[i].draw();
		}
		for(var i = 0; i < this.textElementCount; i++) {
			ctx.font="15px Arial";
			ctx.fillText(this.textElement[i].text, this.textElement[i].x*3, this.textElement[i].y*3);
			//ctx.fillText("hello", 10, 10);
		}
		this.startPoint.draw();
		this.finishPoint.draw();

	}

}

var topLeft = new Point();
var bottomRight = new Point();
var level = new ElementRegistry();
var currentX;
var currentY;
var deadly = false;
var drawOutline = false;
var dynamic = false;
var InCanvas = false;
var selectedElement = -1;


function setMouseInCanvas(x) {
	InCanvas=x;
	document.getElementById("oncanvas").innerHTML="Mouse In Canvas: " + x;
}

function changeDeadly() {
	if(deadly) deadly=false;
	else if(!deadly) deadly=true;
	document.getElementById("deadly").innerHTML="Deadly: " + deadly;
}
function changeDynamic() {
if(dynamic) dynamic=false;
else if(!dynamic) dynamic=true;
document.getElementById("dynamic").innerHTML="Dynamic: " + dynamic;
document.getElementById("directionContainer").hidden=!dynamic;
document.getElementById("distanceContainer").hidden=!dynamic;
document.getElementById("speedContainer").hidden=!dynamic;
}

function clear() {
	ctx.fillStyle="white";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
ctx.strokeStyle="black";
ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function init() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
clear();
document.getElementById("color").value="#524f58";
level.drawElements();

document.getElementById("deadly").innerHTML="Deadly: " + deadly;
document.getElementById("coords").innerHTML="Mouse Position: (0,0)";
document.getElementById("dynamic").innerHTML="Dynamic: " + dynamic;

}

function Point() {
	this.x; this.y;
}



function publishLevel() {
	document.getElementById("output").innerHTML="";
	var message;
	message = level.name+".setStartPoint("+level.startPoint.x+","+level.startPoint.y+","+'"'+level.startPoint.color+'");'; 
	writeLine(message);
		message = level.name+".setFinishPoint("+level.finishPoint.x+","+level.finishPoint.y+","+'"'+level.finishPoint.color+'");'; 
	writeLine(message);
	for(var i = 0; i < level.elementCount; i++) {
		if(!level.elements[i].dynamic) {
			message = level.name+".addElement("+level.elements[i].x+","+level.elements[i].y+","+level.elements[i].w+","+level.elements[i].h+","+level.elements[i].deadly+","+'"'+level.elements[i].color+'");';
		}
		else if(level.elements[i].dynamic) {
			message = level.name+".addDynamicElement("+level.elements[i].x+","+level.elements[i].y+","+level.elements[i].w+","+level.elements[i].h+","+level.elements[i].deadly+',"'+level.elements[i].dir+'",'+level.elements[i].motionCount+","+level.elements[i].speed+',"'+level.elements[i].color+'");';
		}
		writeLine(message);
	}
}

function getCanvasPos(mx, my) {
var rect = canvas.getBoundingClientRect();
return {
	x: Math.floor((mx-rect.left)/cell_size),
	y: Math.floor((my-rect.top)/cell_size)
}
}




function setLevelName() {
	level.name=document.getElementById("levelNameInput").value;
}

function drawShape(x, y, w, h, color) {
	ctx.fillStyle=color;
	ctx.fillRect(x*cell_size, y*cell_size, w*cell_size, h*cell_size);
	ctx.strokeStyle="black";
	ctx.strokeRect(x*cell_size, y*cell_size, w*cell_size, h*cell_size);
}

function updateElementDeadly() {
	if(level.elements[selectedElement].deadly)level.elements[selectedElement].deadly=false;
	else if(!level.elements[selectedElement].deadly)level.elements[selectedElement].deadly=true;
	document.getElementById("elementDeadlyButton").innerHTML=level.elements[selectedElement].deadly;
}
function updateElementDynamic() {
		if(level.elements[selectedElement].dynamic)level.elements[selectedElement].dynamic=false;
	else if(!level.elements[selectedElement].dynamic)level.elements[selectedElement].dynamic=true;
	document.getElementById("elementDynamicButton").innerHTML=level.elements[selectedElement].dynamic;
	document.getElementById("dynamicOptions").hidden=!level.elements[selectedElement].dynamic;
}

function updateElementColor() {
	level.elements[selectedElement].color=document.getElementById("elementColor").value;
	clear();
	level.drawElements();
}

function updateElementPosition() {
	level.elements[selectedElement].x=document.getElementById("elementX").value;
	level.elements[selectedElement].y=document.getElementById("elementY").value;
	clear();
level.drawElements();
}

function updateElementSize() {
	level.elements[selectedElement].w=document.getElementById("elementWidth").value;
	level.elements[selectedElement].h=document.getElementById("elementHeight").value;
	clear();
	level.drawElements();
}
function updateDynamic() {
	level.elements[selectedElement].dir = document.getElementById("elementDirection").value;
	level.elements[selectedElement].motionCount = document.getElementById("elementDistance").value;
	level.elements[selectedElement].speed = document.getElementById("elementSpeed").value;
	drawMotionPath(selectedElement);
}


function updateCoords() {
	var mouse = getCanvasPos(event.x, event.y);
	document.getElementById("coords").innerHTML="Mouse Position: ("+mouse.x+","+mouse.y+")";
	currentX = mouse.x;
	currentY = mouse.y;
	if(drawOutline)
	{
	ctx.strokeStyle="black";
	clear();
	level.drawElements();
	ctx.strokeRect(topLeft.x*3, topLeft.y*3, (currentX-topLeft.x)*3, (currentY-topLeft.y)*3);
}

}

function drawMotionPath(i) {
			clear();
		level.drawElements();
			ctx.strokeStyle="red";
			var elementRect = level.elements[i].getBoundingBox();
			if(level.elements[i].dir=="up") {
			drawLine(elementRect.left, elementRect.top, elementRect.left, elementRect.top-level.elements[i].motionCount);
			drawLine(elementRect.right, elementRect.top, elementRect.right, elementRect.top-level.elements[i].motionCount);

			}
			else if(level.elements[i].dir=="left") {
				drawLine(elementRect.left, elementRect.top, elementRect.left-level.elements[i].motionCount, elementRect.top);
				drawLine(elementRect.left, elementRect.bottom, elementRect.left-level.elements[i].motionCount, elementRect.bottom);
			}
			else if(level.elements[i].dir=="down") {
				drawLine(elementRect.left, elementRect.bottom, elementRect.left, elementRect.bottom+parseInt(level.elements[i].motionCount));
				drawLine(elementRect.right, elementRect.bottom, elementRect.right, elementRect.bottom+parseInt(level.elements[i].motionCount));
			}
			else if(level.elements[i].dir=="right") {
					drawLine(elementRect.right,elementRect.top, elementRect.right+parseInt(level.elements[i].motionCount), elementRect.top);
					drawLine(elementRect.right,elementRect.bottom, elementRect.right+parseInt(level.elements[i].motionCount), elementRect.bottom);
			}
}

document.getElementById("canvas").addEventListener("mousedown", function(e){

var mouse = getCanvasPos(e.x, e.y);
	clear();
		level.drawElements();
			document.getElementById("elementOptions").hidden=true;
			document.getElementById("dynamicOptions").hidden=true;
for(var i = level.elementCount-1; i > -1; i--) {
	var elementRect = level.elements[i].getBoundingBox();
	console.log("Left: " + elementRect.left + "Right: " + elementRect.right + "Top: " + elementRect.top + "Bottom: " + elementRect.bottom);
	console.log("X: " + mouse.x + " Y: " + mouse.y);
	if(mouse.x>elementRect.left&&mouse.x<elementRect.right&&mouse.y>elementRect.top&&mouse.y<elementRect.bottom) {
		console.log("mouse on element");
		selectedElement=i;
		document.getElementById("elementOptions").hidden=false;
		document.getElementById("elementX").value=level.elements[i].x;
		document.getElementById("elementY").value=level.elements[i].y;
		document.getElementById("elementWidth").value=level.elements[i].w;
		document.getElementById("elementHeight").value=level.elements[i].h;
		document.getElementById("elementColor").value=level.elements[i].color;
		document.getElementById("elementDynamicButton").innerHTML=level.elements[i].dynamic;
		document.getElementById("elementDeadlyButton").innerHTML=level.elements[i].deadly;
		if(level.elements[i].dynamic) {
			document.getElementById("dynamicOptions").hidden=false;
			document.getElementById("elementDirection").value=level.elements[i].dir;
			document.getElementById("elementDistance").value=level.elements[i].motionCount;
			document.getElementById("elementSpeed").value=level.elements[i].speed;
			drawMotionPath(i);
		}
		break;
	}
	else {
		selectedElement=-1;
	}
}
document.getElementById("selectedElement").innerHTML="Selected Element ID: " + selectedElement;
});

document.addEventListener("keydown", function(e) {
var key = e.keyCode;
if(InCanvas==false){
	console.log("false");
	return;
}
if(key==81) {
	if(level.elementCount>0)level.elementCount--;
}
else if(key==83) {
	level.setStartPoint(currentX, currentY, document.getElementById("color").value);
}
else if(key==70) {
	level.setFinishPoint(currentX, currentY, document.getElementById("color").value);
}
else if(key==79) {
	//o
	topLeft.x=currentX;
	topLeft.y=currentY;
	drawOutline=true;
}
else if(key==80) {
	//p
	bottomRight.x=currentX; bottomRight.y=currentY;
	var message;

if(bottomRight.x<topLeft.x) {
	bottomRight.x=topLeft.x;
	topLeft.x=currentX;
}
if(bottomRight.y<topLeft.y) {
	bottomRight.y=topLeft.y;
	topLeft.y=currentY;
}

			if(!dynamic)
			{
				level.addElement(topLeft.x, topLeft.y, bottomRight.x-topLeft.x, bottomRight.y-topLeft.y, deadly, document.getElementById("color").value);
				message = level.name+".addElement("+topLeft.x+","+topLeft.y+","+bottomRight.x+","+bottomRight.y+","+deadly+","+document.getElementById("color").value+");";
			}
			else if(dynamic) {
				level.addDynamicElement(topLeft.x, topLeft.y, bottomRight.x-topLeft.x, bottomRight.y-topLeft.y, deadly, document.getElementById("direction").value, document.getElementById("distance").value, document.getElementById("speed").value, document.getElementById("color").value);
				message = level.name+".addElement("+topLeft.x+","+topLeft.y+","+bottomRight.x+","+bottomRight.y+","+deadly+","+document.getElementById("direction").value+","+document.getElementById("distance").value+","+document.getElementById("speed").value+","+document.getElementById("color").value+");";
			}
		
		//writeLine(message);
				drawOutline=false;
}
else if((key==37||key==38||key==39||key==40)&&selectedElement!=-1)
{
if(key==37) {
	level.elements[selectedElement].x--;
}
else if(key==38) {
	level.elements[selectedElement].y--;
}
else if(key==39) {
	level.elements[selectedElement].x++;
}
else if(key==40) {
	level.elements[selectedElement].y++;
}

document.getElementById("elementX").value=level.elements[selectedElement].x;
document.getElementById("elementY").value=level.elements[selectedElement].y;
}
else if(key==8) {
	//delete
	if(selectedElement!=-1)level.removeElement(selectedElement);

}
clear();
level.drawElements();

});