function ProjectileRegistry() {
	this.projectiles = [];
	this.pNum = 0;
	this.addProjectile = function(p) {
		this.projectiles[this.pNum]=p;
		this.pNum++;
	}
	
	this.removeProjectile = function(index) {
		for(var i = index; i < this.pNum; i++) {
			this.projectiles[i]=this.projectiles[i+1];
		}
		this.pNum--;
	}
	
	
	this.tick = function() {
		for(var i = 0; i < this.pNum; i++) {
			if(this.projectiles[i].alive) this.projectiles[i].tick();
			if(!this.projectiles[i].alive) this.removeProjectile(i);
			
		}
	}
	this.render = function() {
		for(var i = 0; i < this.pNum; i++) {
			this.projectiles[i].render();
		}
	}
}

function P2Collisions(x,y,damage) {
	if(x<p1.x) {
		p1.health-=damage;
		return true;
	}
	
	var testx = Math.floor((x-p1.x)/50);
	var testy = Math.floor((y-p1.y)/50);
	
	if(testx>=0 && p1.grid.grid[testx]!=undefined&&p1.grid.grid[testx][testy]!=undefined) {
		p1.grid.grid[testx][testy].health-=damage;
		return true;
	}
	
	
	return false;
}
function P1Collisions(x,y,damage) {
	if(x>p2.x+p2.grid.w*p2.grid.cell_size) {
		p2.health-=damage;
		return true;
	}
	
	var testx = Math.floor((x-p2.x)/50);
	var testy = Math.floor((y-p2.y)/50);
	
	if(testx>=0 && p2.grid.grid[testx]!=undefined&&p2.grid.grid[testx][testy]!=undefined) {
		p2.grid.grid[testx][testy].health-=damage;
		return true;
	}
	
	return false;
}

//Basic Projectile

function Projectile(x, y, d) {
	this.x=x;
	this.y=y;
	this.dir = d;
	this.speed = 3;
	this.alive=true;
	
	this.damage =5;
	
	this.kill = function() {
		this.alive=false;
	}
	
	this.tick = function() {
		for(var i = 0; i < this.speed; i++) {
			this.x+=this.dir;
		}
		if(this.dir==1) {
			if(P1Collisions(this.x,this.y,this.damage)) {
				this.kill();
			}
		}
		else if(this.dir==-1) {
			if(P2Collisions(this.x,this.y,this.damage)) {
				this.kill();
			}
		}
	}
	this.render = function() {
		ctx.fillStyle="blue";
		ctx.fillRect(this.x,this.y,10,10);
	}
}


function Rocket(x,y,d) {
	Projectile.call(this,x,y,d);
	
	this.render = function() {
		drawJmage(this.x, this.y, 0.05, textures.rocket,this.dir,29);
	}
	
	
}

/*function Rocket(x, y, d) {
	this.x=x;
	this.y=y;
	this.dir = d;
	this.speed = 3;
	this.alive=true;
	
	this.damage =5;
	
	this.kill = function() {
		this.alive=false;
	}
	
	this.tick = function() {
		for(var i = 0; i < this.speed; i++) {
			this.x+=this.dir;
		}
		if(this.dir==1) {
			if(P1Collisions(this.x,this.y,this.damage)) {
				this.kill();
			}
		}
		else if(this.dir==-1) {
			if(P2Collisions(this.x,this.y,this.damage)) {
				this.kill();
			}
		}
	}
	this.render = function() {
		ctx.fillStyle="red";
		
		drawJmage(this.x, this.y, 0.05, textures.rocket,this.dir,29);
	}
}*/


