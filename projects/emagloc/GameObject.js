function Game() {
	this.objects = [];
	this.objectNum = 0;
	
	
	this.addObject = function(object) {
		this.objects[this.objectNum]=object;
		this.objectNum++;
	}
	this.removeObject = function(index) {
		for(var i = index; i < this.objectNum; i++) {
			this.objects[i]=this.objects[i+1];
		}
		this.objectNum--;
	}
	this.tick = function() {
		for(var i=0; i < this.objectNum; i++) {
			if(this.objects[i].dead) {
				this.removeObject(i);
			} else {
			this.objects[i].tick();
			}
		}
	}
	this.render = function() {
		for(var i=0; i < this.objectNum; i++) {
			this.objects[i].render();
		}
	}
}