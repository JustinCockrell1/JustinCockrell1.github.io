function Bullet(x, y, vx, vy) {
	this.x=x;
	this.y=y;
	this.w=5;
	this.h=5;
	this.id=ID.bullet;
	
	this.vx=vx;
	this.vy=vy;
	
	this.dead=false;
	
	this.tick = function() {
		
		this.x+=this.vx;
		this.y+=this.vy;
		
		if(this.x<1||this.x+this.w>ctx.canvas.width||this.y<1||this.y+this.h>ctx.canvas.height) {
			this.dead=true;
		}
		
		for(var i = 0; i < game.objectNum; i++) {
			if(game.objects[i].id!=ID.bullet) {
				var object = game.objects[i];
				if(this.x+this.w > object.x && this.y+this.h > object.y && this.x < object.x+object.w && this.y < object.y+object.h) {
					this.dead=true;
					if(object.id==ID.basicEnemy) {
					game.objects[i].health-=5;
					if(game.objects[i].health<=0) {
						game.objects[i].dead=true;
					}
					}
					else {
						game.objects[i].dead=true;
					}
				}
			}
		}
		
	}
	this.render = function() {
		ctx.fillStyle="white";
		ctx.fillRect(this.x, this.y, this.w, this.h);

	}
}

function Distance(x, x1, y, y1) {
	return Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1));
	
}