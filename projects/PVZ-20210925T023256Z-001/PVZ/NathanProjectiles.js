//Nathans Stuff
function Arrow(x, y, d) {
	this.x=x;
	this.y=y;
	this.dir = d;
	this.speed = 9;
	this.alive=true;
	
	this.damage =1;
	
	this.kill = function() {
		this.alive=false;
	}
	
	this.tick = function() {
		for(var i = 0; i < 5; i++) {
		this.x+=(this.dir*this.speed)/2;
		if(this.dir==1) {
			if(P1Collisions(this.x,this.y,this.damage)) {
				this.kill();
				break;
			}
		}
		else if(this.dir==-1) {
			if(P2Collisions(this.x,this.y,this.damage)) {
				this.kill();
				break;
			}
		}
		}
	}
	this.render = function() {
		ctx.fillStyle="red";
		
		ctx.fillRect(this.x, this.y, 20, 20);
	}
}

function WallBreaker(x, y, d) {
	this.x=x;
	this.y=y;
	this.dir = d;
	this.speed = 3;
	this.alive=true;
	
	this.damage =0;
	
	this.kill = function() {
		this.alive=false;
	}
	
	this.tick = function() {
		this.x+=(this.dir*this.speed);
		
		if(this.dir==1) {
			console.log("dir1")
		var testx = Math.floor((this.x-p2.x)/50);
	var testy = Math.floor((this.y-p2.y)/50);
	
	if(testx>=0 && p2.grid.grid[testx]!=undefined&&p2.grid.grid[testx][testy]!=undefined) {
		if(p2.grid.grid[testx][testy].id==StructureID.basicWall)  {
					p2.grid.grid[testx][testy].health-=50;
				}
				this.kill();
	}
		}
		else if(this.dir==-1) {
			var testx = Math.floor((this.x-p1.x)/50);
			var testy = Math.floor((this.y-p1.y)/50);
	
			if(testx>=0 && p1.grid.grid[testx]!=undefined&&p1.grid.grid[testx][testy]!=undefined) {
				if(p1.grid.grid[testx][testy].id==StructureID.basicWall)  {
					p1.grid.grid[testx][testy].health-=50;
				}
				this.kill();
			}
		}
		
	}
	this.render = function() {
		ctx.fillStyle="red";
		
		ctx.fillRect(this.x, this.y, 20, 20);
	}
}


function GoblinRocket(x, y, d) {
	this.x=x;
	this.y=y;
	this.dir = d;
	this.speed = 3;
	this.alive=true;
	
	this.damage =1;
	
	this.kill = function() {
		this.alive=false;
	}
	
	this.tick = function() {
		this.x+=(this.dir*this.speed);
		
		if(this.dir==1) {
			console.log("dir1")
		var testx = Math.floor((this.x-p2.x)/50);
	var testy = Math.floor((this.y-p2.y)/50);
	
	if(testx>=0 && p2.grid.grid[testx]!=undefined&&p2.grid.grid[testx][testy]!=undefined) {
		if(p2.grid.grid[testx][testy].id==StructureID.basicMine)  {
					p2.grid.grid[testx][testy].health=0;
				}
				else {
					p2.grid.grid[testx][testy].health-=this.damage;
				}
				this.kill();
	}
		}
		else if(this.dir==-1) {
			var testx = Math.floor((this.x-p1.x)/50);
			var testy = Math.floor((this.y-p1.y)/50);
	
			if(testx>=0 && p1.grid.grid[testx]!=undefined&&p1.grid.grid[testx][testy]!=undefined) {
				if(p1.grid.grid[testx][testy].id==StructureID.basicWall)  {
					p1.grid.grid[testx][testy].health-=50;
				}
				this.kill();
			}
		}
		
	}
	this.render = function() {
		ctx.fillStyle="red";
		
		ctx.fillRect(this.x, this.y, 20, 20);
	}
}


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