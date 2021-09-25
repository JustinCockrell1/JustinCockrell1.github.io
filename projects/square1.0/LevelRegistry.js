var level1 = new ElementRegistry();
var level2 = new ElementRegistry();
var level3 = new ElementRegistry();
var level4 = new ElementRegistry();
var home = new ElementRegistry();

function levelRegistry() {
initLevels();
registerLevels();
}

function initLevels() {
	//Level 1
			{
			level1.setStartPoint(0, 88, "blue");
			level1.setFinishPoint(188, 88, "purple");
	
			level1.addDynamicElement(13, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(23, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(33, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(43, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(53, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(63, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(73, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(83, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(93, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(103, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(113, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(123, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(133, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(143, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(153, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(163, 195, 5, 5, true, "up", 200, 2, "lightgreen");
			level1.addDynamicElement(173, 0, 5, 5, true, "down", 200, 2, "lightgreen");
			level1.addDynamicElement(183, 195, 5, 5, true, "up", 200, 2, "lightgreen");

			level1.addElement(0, 78, 200, 1, false, "grey");
			level1.addElement(0, 110, 200, 1, false, "grey");
			}
	//Level 2
			{
			level2.setStartPoint(94, 94, "blue");
			level2.setFinishPoint(0, 94, "purple");
		 	//left
		 	//vertical
		 	level2.addElement(82, 0, 3, 85, false, "grey");
		 	level2.addElement(82, 115, 3, 85, false, "grey");
		 	//horizontal
		 	level2.addElement(0, 82, 85, 3, false, "grey");
		 	level2.addElement(0, 85+30, 85, 3, false, "grey");
		 	//right
		 	//vertical
		 	level2.addElement(85+30, 0, 3, 85, false, "grey");
		 	level2.addElement(85+30, 115, 3, 85, false, "grey");
		 	//horizontal
		 	level2.addElement(115, 82, 85, 3, false, "grey");
		 	level2.addElement(115, 85+30, 85, 3, false, "grey");
		 	//owies
		 	level2.addElement(94, 0, 12, 12, true, "purple");
		 	level2.addElement(94, 188, 12, 12, true, "purple");
		 	level2.addElement(188, 94, 12, 12, true, "purple");
		 	//text
		 	level2.addText("What is the 9th element in the", 120, 20);
		 	level2.addText("periodic table?", 120, 25);
		 	level2.addText("Oxygen", 85, 25);
		 	level2.addText("Flourine", 10, 90);
		 	level2.addText("Carbon", 85, 150);
		 	level2.addText("Iron", 160, 90);

	
		 }

		 //Benjamins level
		 {
home.setStartPoint(0,0,"blue");
home.setFinishPoint(188,188,"red");
home.addElement(undefined,undefined,NaN,NaN,false,"#524f58");
home.addElement(12,0,188,110,false,"#52b8ff");
home.addDynamicElement(77,114,31,8,true,"down",82,2,"#f010ff");
		 }

 //Level 3
{
level3.setStartPoint(0,0,"blue");
level3.setFinishPoint(188,188,"red");
level3.addElement(0,26,175,7,false,"#524f58");
level3.addElement(25,60,175,7,false,"#524f58");
level3.addElement(0,93,175,7,false,"#524f58");
level3.addDynamicElement(33,26,6,6,true,"up",35,1,"#00ff00");
level3.addDynamicElement(66,26,6,6,true,"up",35,1,"#00ff00");
level3.addDynamicElement(101,26,6,6,true,"up",35,1,"#00ff00");
level3.addDynamicElement(137,26,6,6,true,"up",35,1,"#00ff00");
level3.addDynamicElement(26,38,8,8,true,"right",140,2,"#00ff00");
level3.addDynamicElement(165,49,8,8,true,"left",140,2,"#00ff00");
level3.addDynamicElement(0,90,25,3,false,"up",57,1,"#996633");
level3.addElement(44,80,5,13,true,"#00ff00");
level3.addElement(61,67,5,13,true,"#00ff00");
level3.addElement(78,80,5,13,true,"#00ff00");
level3.addElement(97,67,5,13,true,"#00ff00");
level3.addDynamicElement(135,60,7,7,true,"down",33,1,"#00ff00");
level3.addDynamicElement(175,67,25,3,false,"down",117,2,"#996633");
level3.addElement(168,100,7,100,false,"#403d46");
 }
		 //Level 4 
		 {
level4.setStartPoint(0,0,"blue");
level4.setFinishPoint(188,0,"#800080");
level4.addElement(80,0,40,172,false,"#524f58");
level4.addDynamicElement(0,35,6,6,true,"right",195,2,"#00ff00");
level4.addDynamicElement(0,60,6,6,true,"right",195,2,"#00ff00");
level4.addDynamicElement(0,85,6,6,true,"right",195,2,"#00ff00");
level4.addDynamicElement(0,110,6,6,true,"right",195,2,"#00ff00");
level4.addDynamicElement(0,135,6,6,true,"right",195,2,"#00ff00");
level4.addDynamicElement(194,47,6,6,true,"left",195,2,"#00ff00");
level4.addDynamicElement(194,72,6,6,true,"left",195,2,"#00ff00");
level4.addDynamicElement(194,97,6,6,true,"left",195,2,"#00ff00");
level4.addDynamicElement(194,122,6,6,true,"left",195,2,"#00ff00");
level4.addDynamicElement(194,147,6,6,true,"left",195,2,"#00ff00");
level4.addDynamicElement(80,172,40,28,false,"down",50,1,"#996633");
		 }
 }

function registerLevels() {
	game.addLevel(level4);
	game.addLevel(level3);
	game.addLevel(home);
	game.addLevel(level2);
	game.addLevel(level1);
}