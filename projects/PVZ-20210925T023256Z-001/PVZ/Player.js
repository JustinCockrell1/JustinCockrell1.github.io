function Player(x,y,vector) {
	
	this.x=x;
	this.y=y;
	this.vector = vector;
	this.grid = new PlayerGrid();
	this.projectiles = new ProjectileRegistry();
	
	this.health = 100;
	this.balance = 50;
	
	this.arsenal = structures;
	
	this.selectedStructure = 0;
	
	this.addStructure = function() {
			//console.log(new structures.structures[this.selectedStructure]);
			//console.log(new structures.structures[this.selectedStructure]().price);
		if(this.balance>=new this.arsenal.structures[this.selectedStructure]().price) {
		this.grid.addStructure(new this.arsenal.structures[this.selectedStructure](this.vector),this.x,this.y);
		this.balance-=new this.arsenal.structures[this.selectedStructure]().price;
		}
	}
	
	this.count = 0;
	
	this.tick = function() {
		this.grid.tick();
		this.projectiles.tick();
		
		if(this.count>=300) {
			this.count=0;
			//this.balance+=3;
		}
		this.count++;
		
		if(this.health<=0) {
			console.log("Game Over")
		}
	}
	this.render = function() {
		//this.grid.render(this.x, this.y);
		//this.projectiles.render();
		
		//Health Bar
		ctx.fillStyle="grey";
		ctx.fillRect(this.x, this.y+this.grid.h*this.grid.cell_size+20, 100, 15);
		(this.health > 20) ? ctx.fillStyle="green" : ctx.fillStyle="red";
		ctx.fillRect(this.x, this.y+this.grid.h*this.grid.cell_size+20, this.health, 15);
		
		
		//Money
		ctx.fillStyle="white";
		ctx.font="20px arial"
		ctx.fillText("$"+this.balance, this.x+200,this.y+this.grid.h*this.grid.cell_size+30);
		
		//Structure Selections
		
		var structureR = this.arsenal;
		
		var struct = structureR.structures;
		
		
		for(var i = 0; i < structureR.sNum; i++) {
			ctx.fillStyle="white";
		ctx.fillRect(this.x+(i+this.grid.w/2-Math.floor(structureR.sNum/2))*this.grid.cell_size, this.y+this.grid.h*this.grid.cell_size+60,50,50);
		new struct[i](1).render(this.x+(i+this.grid.w/2-Math.floor(structureR.sNum/2))*this.grid.cell_size, this.y+this.grid.h*this.grid.cell_size+60);
		if(i==this.selectedStructure) {
			var price = new struct[i](1).price;
			var name = new struct[i](1).name;
			/*ctx.fillStyle="rgba("+0+","+ 255 +","+0+","+0.3+")";
			if(this.balance<price)ctx.fillStyle="rgba("+255+","+ 0 +","+0+","+0.3+")";
			ctx.fillRect(this.x+(i+this.grid.w/2-Math.floor(structureR.sNum/2))*this.grid.cell_size, this.y+this.grid.h*this.grid.cell_size+60,50,50)*/
			
			ctx.strokeStyle="red";
			ctx.strokeRect(this.x+(i+this.grid.w/2-Math.floor(structureR.sNum/2))*this.grid.cell_size, this.y+this.grid.h*this.grid.cell_size+60,50,50);
			
			ctx.fillStyle="white";
			ctx.font="15px arial"
			ctx.fillText(name+": $"+price, this.x+400,this.y+this.grid.h*this.grid.cell_size+30);
			
		}
		}
	}
}



function PlayerGrid() {
	
	this.x = 0;
	this.y = 0;
	
	this.cell_size = 50;
	
	this.w = 14;
	this.h = 14;
	
	this.grid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	
	this.addStructure = function(s,x,y) {
		this.grid[this.x][this.y]=s;
		this.grid[this.x][this.y].x=this.x*this.cell_size+x;
		this.grid[this.x][this.y].y=this.y*this.cell_size+y;
		
	}
	
	this.moveLeft = function() {
		if(this.x > 0) this.x--;
		else this.x = this.w-1;
	}
	this.moveUp = function() {
		if(this.y > 0) this.y--;
		else this.y = this.h-1;
	}
	this.moveRight = function() {
		if(this.x < this.w-1) this.x++;
		else this.x = 0;
	}
	this.moveDown = function() {
		if(this.y < this.h-1) this.y++;
		else this.y = 0;
	}
	
	this.tick = function() {
		for(var i = 0; i < this.w; i++) {
			for(var j = 0; j < this.h; j++) {
				if(this.grid[i]!=undefined && this.grid[i][j]!=undefined) {
					if(this.grid[i][j].health>0)
						this.grid[i][j].tick();
					else
						this.grid[i][j]=undefined;
				}
			}
		}
	}
	
	this.render = function(x, y) {
		for(var i = 0; i < this.w; i++) {
			for(var j = 0; j < this.h; j++) {
				ctx.fillStyle="white";
				ctx.fillRect(i*this.cell_size+x, j*this.cell_size+y, this.cell_size, this.cell_size);
				//drawJmage(i*this.cell_size+x,j*this.cell_size+y,.4,textures.background,50);
				
				if(this.grid[i]!=undefined && this.grid[i][j]!=undefined) {
					if(this.grid[i][j]==1) {
						ctx.fillStyle="yellow";
						ctx.fillRect(i*this.cell_size+x, j*this.cell_size+y, this.cell_size, this.cell_size);
					}
					this.grid[i][j].render(i*this.cell_size+x,j*this.cell_size+y);
				}
				
			}
		}
		
		ctx.strokeStyle="red";
		ctx.strokeRect(x+this.x*this.cell_size, y+this.y*this.cell_size,this.cell_size,this.cell_size);
		
	}
	
	
}