function clamp(min, current, max) {
	if(current<min)return min;
	if(current>max)return max;
	return current;
}

function Player(x, y) {
	this.x=x;
	this.y=y;
	this.w=40;
	this.h=40;
	
	this.vx=0;
	this.vy=0;
	
	this.health=100;
	
	this.speed=8;
	
	this.objectCollisions=function() {
		for(var i = 0; i < game.objectNum; i++) {
			var object = game.objects[i];
			if(object.x<this.x+this.w&&object.y<this.y+this.h&&object.x+object.w>this.x&&object.y+object.h>this.y) {
				if(object.id==ID.basicEnemy||object.id==ID.smartEnemy||object.id==ID.fastEnemy) {
				this.health-=10;
				game.objects[i].dead=true;
				}
			}
		}
	}
	
	this.tick=function() {
		this.objectCollisions();
		this.x+=this.vx;
		this.y+=this.vy;
		this.x=clamp(0, this.x, ctx.canvas.width-this.w);
		this.y=clamp(0, this.y, ctx.canvas.height-this.h);
	}
	this.render = function() {
		ctx.fillStyle="white";
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.fillStyle="gray";
		ctx.fillRect((ctx.canvas.width-(ctx.canvas.width/3))-5, 5, ctx.canvas.width/3, 20);
		ctx.fillStyle="#038406";
		ctx.fillRect((ctx.canvas.width-(ctx.canvas.width/3))-5, 5, (ctx.canvas.width/3)*this.health/100, 20);
		
	}
}