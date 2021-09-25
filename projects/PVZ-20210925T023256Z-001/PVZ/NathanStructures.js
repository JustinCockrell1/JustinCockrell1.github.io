//Nathans Stuff
function Archer(vector) {
	
	this.x;
	this.y;
	
	this.name="Archer";
	
	this.price = 25;
	
	this.dir = vector;
	
	this.id=StructureID.archer;
	
	this.w=50;
	this.h=50;
	
		this.health = 20;
	
	this.count=0;
	
	this.tick = function() {
		
		if(this.count>25) {
		if(this.dir==1)p1.projectiles.addProjectile(new Arrow(this.x,this.y,this.dir));
		else p2.projectiles.addProjectile(new Arrow(this.x,this.y,this.dir));
		this.count=0;
		}
		this.count++;
	}
	this.render = function(x,y) {
		ctx.fillStyle="yellow";
		ctx.fillRect(x, y, this.w, this.h);
	}

}

function WallBreakerTurret(vector) {
	this.x;
	this.y;
	this.price = 25;
	this.dir = vector;
	this.id=StructureID.archer;
	this.w=50;
	this.h=50;
	this.health = 20;
	this.count=0;
	
	this.name="Wall Breaker"
	
	this.tick = function() {
		
		if(this.count>300) {
		if(this.dir==1)p1.projectiles.addProjectile(new WallBreaker(this.x,this.y+5,this.dir));
		else p2.projectiles.addProjectile(new WallBreaker(this.x,this.y+5,this.dir));
		this.count=0;
		}
		this.count++;
	}
	
	this.render = function(x,y) {
		ctx.fillStyle="orange";
		ctx.fillRect(x, y, this.w, this.h);
	}

}

function Sunflower(vector) {
	
	this.name="Sunflower";
	
this.x;
this.y;
this.price = 15;
this.player=vector;
this.id=StructureID.basicMine;
this.w=50;
this.h=50;
this.health = 10;
this.count=0;
this.tick = function() {
		
	if(this.count>100) {
		if(this.player==1)p1.balance+=30;
		else p2.balance+=50;
		this.count=0;
		}
		this.count++;
	}
	this.render = function(x,y) {
		ctx.fillStyle="brown";
		ctx.fillRect(x, y, this.w, this.h);
	}
	
}

function Goblin(vector) {
	
	this.name="Goblin";
	
	this.x;
	this.y;
	
	this.price = 10;
	
	this.dir = vector;
	
	this.id=StructureID.goblin;
	
	this.w=50;
	this.h=50;
	
		this.health = 10;
	
	this.count=0;
	
	this.tick = function() {
		
		if(this.count>300) {
		if(this.dir==1)p1.projectiles.addProjectile(new GoblinRocket(this.x,this.y,this.dir));
		else p2.projectiles.addProjectile(new GoblinRocket(this.x,this.y,this.dir));
		this.count=0;
		}
		this.count++;
	}
	this.render = function(x,y) {
			ctx.fillStyle="purple";
		ctx.fillRect(x, y, this.w, this.h);
	}

}