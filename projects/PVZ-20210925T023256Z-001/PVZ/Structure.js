function StructureRegistry() {
	this.structures=[];
	this.sNum = 0;
	this.addStructure = function(s) {
		this.structures[this.sNum]=s;
		this.sNum++;
	}
}

var StructureID = {
	rocketLauncher:1,
	basicMine:2,
	basicWall:3,
	archer:4,
	wallBreaker:5,
	sunflower:6,
	goblin:7
};

function RocketLauncher(vector) {
	
	this.x;
	this.y;
	
	this.name="Rocket Launcher";
	
	this.price = 100;
	
	this.dir = vector;
	
	this.id=StructureID.rocketLauncher;
	
	this.w=50;
	this.h=50;
	
		this.health = 15;
	
	this.count=0;
	
	this.tick = function() {
		
		if(this.count>300) {
		if(this.dir==1)p1.projectiles.addProjectile(new Rocket(this.x,this.y,this.dir));
		else p2.projectiles.addProjectile(new Rocket(this.x,this.y,this.dir));
		this.count=0;
		}
		this.count++;
	}
	this.render = function(x,y) {
		//console.log("Drawing ROcket Launcher at "+this.x+","+this.y);
		drawJmage(x, y, 0.07, textures.rocketLauncher,this.dir,47);
	}

}


function BasicMine(vector) {
	
	this.x;
	this.y;
	
	this.name="Basic Mine";
	
	this.price = 50;
	
	this.player=vector;
	
	this.id=StructureID.basicMine;
	
	this.w=50;
	this.h=50;
	
	this.health = 10;
	
	this.count=0;
	
	this.texture = textures.basicMine_down;
	
	this.tick = function() {
		
		if(this.count==150||this.count==300) {
			this.texture = (this.texture == textures.basicMine_down) ? textures.basicMine_up : textures.basicMine_down;
		}
		
		if(this.count>=300) {
		if(this.player==1)p1.balance+=3;
		else p2.balance+=3;
		
		this.count=0;
		}
		
		
		
		this.count++;
	}
	this.render = function(x,y) {
	drawJmage(x, y, 0.25, this.texture,this.player,50);
	}
	
}

function BasicWall(vector) {
		this.x;
	this.y;
	
	this.name="Basic Wall";
	
	this.price = 25;
	
	this.player=vector;
	
	this.id=StructureID.basicWall;
	
	this.texture = textures.basicWall;
	
	this.w=50;
	this.h=50;
	
	this.health = 50;
	
	this.tick = function() {
		if(this.health<50*.3) {
			this.texture = textures.basicWall_damaged;
		}
	}
	this.render = function(x,y) {
	drawJmage(x, y, 0.25, this.texture,this.player,50);
	}
}






function initStructures() {
	structures.addStructure(RocketLauncher);
	structures.addStructure(BasicMine);
	structures.addStructure(BasicWall);
	
	nathan.addStructure(RocketLauncher);
	nathan.addStructure(BasicMine);
	nathan.addStructure(BasicWall);
	nathan.addStructure(Archer);
	nathan.addStructure(WallBreakerTurret);
	nathan.addStructure(Sunflower);
	nathan.addStructure(Goblin);
	
}