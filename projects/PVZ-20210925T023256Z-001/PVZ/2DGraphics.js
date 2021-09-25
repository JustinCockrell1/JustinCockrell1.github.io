function drawJmage(x,y,scale,jmg, dir, w) {
	for(var i = 0; i < jmg.length; i++) {
		//Rectangle
		if(jmg[i][0]=="r") { 
		ctx.fillStyle=jmg[i][5];
	
		if(dir==-1) {
		ctx.fillRect(w + x + (jmg[i][1]*dir)*scale,y+jmg[i][2]*scale,(jmg[i][3]*scale)*dir,jmg[i][4]*scale);
		}
		else {
		ctx.fillRect(x + (jmg[i][1]*dir)*scale,y+jmg[i][2]*scale,(jmg[i][3]*scale)*dir,jmg[i][4]*scale);
		}
		
		}
		else if(jmg[i][0]=="l") {
			drawLine(x+jmg[i][1]*scale,y+jmg[i][2]*scale,x+jmg[i][3]*scale,y+jmg[i][4]*scale,jmg[i][5],jmg[i][6]);
		}
	}

}