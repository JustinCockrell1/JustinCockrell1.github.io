//Basic Enemy
function BasicEnemy(x, y, w, h) {
	this.x=x;
	this.y=y;
	this.w=25;
	this.h=25;
	this.id=ID.basicEnemy;
	
	this.maxHealth=100;
	this.health=this.maxHealth;
	
	this.dead=false;
	
	this.vx=4;
	this.vy=4;
	
	this.tick = function() {
		this.x+=this.vx;
		this.y+=this.vy;
		
		if(this.x<1||this.x+this.w>ctx.canvas.width) {
			this.vx*=-1;
		}
		if(this.y<1||this.y+this.h>ctx.canvas.height) {
			this.vy*=-1;
		}
	}
	this.render = function() {
		ctx.fillStyle="red";
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.fillStyle="grey";
		ctx.fillRect(this.x+2, this.y+(this.h/2)-(this.h/6), this.w-4, this.h/3);
		ctx.fillStyle="#038406";
		ctx.fillRect(this.x+2, this.y+(this.h/2)-(this.h/6), (this.w-4)*(this.health/this.maxHealth), this.h/3);
	}
}

//Fast Enemy
function FastEnemy(x, y, w, h) {
	this.x=x;
	this.y=y;
	this.w=20;
	this.h=20;
	this.id=ID.fastEnemy;
	
	this.dead=false;
	
	this.transparency=1;
	
	this.vx=4;
	this.vy=12;
	
	this.tick = function() {
		this.x+=this.vx;
		this.y+=this.vy;
		
		if(this.x<1||this.x+this.w>ctx.canvas.width) {
			this.vx*=-1;
		}
		if(this.y<1||this.y+this.h>ctx.canvas.height) {
			this.vy*=-1;
		}
	}
	this.render = function() {
		ctx.fillStyle="rgba(0,0,255, "+this.transparency+")";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}

//Smart Enemy
function SmartEnemy(x, y, w, h) {
	this.x=x;
	this.y=y;
	this.w=20;
	this.h=20;
	this.id=ID.smartEnemy;
	
	this.dead=false;
	
	this.transparency=1;
	
	this.vx=0;
	this.vy=0;
	
	this.tick = function() {
		
		var distance = Distance(player.x, this.x, player.y, this.y);
		
		this.vx=((player.x-this.x)/distance)*4;
		this.vy=((player.y-this.y)/distance)*4;
		
		this.x+=this.vx;
		this.y+=this.vy;
		
	}
	this.render = function() {
		ctx.fillStyle="rgba(0,255,0, "+this.transparency+")";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}