var spaceShip;


function setup() {
  createCanvas(1900, 925);
  d = 0;

  spaceShip = {
    x: 200,
    y: height/2,
    directionY: 0,
	distance: 0
  }
  
  textSize(32);
  textAlign(CENTER);
}

function draw() {
	background(0);

	drawSpaceShip();
	handlSpaceShipInteraction();


	//---------cave bottom----------
	fill(100);
	beginShape();
	vertex(0, height);
	for(var i = 0; i < width; i++) {
		var y = getLowerNoisePoint(i)
		vertex(i, y)
	}
	vertex(width, height);
	endShape();
	//---------cave top-------------
	beginShape();
	vertex(0, 0);
	for(var i = 0; i < width; i++) {
		var y = getHigherNoisePoint(i)
		vertex(i, y)
	}
	vertex(width, 0);
	endShape();
	
}

function keyPressed(){
  if(key === 'w'){
    spaceShip.directionY = -5;   
  }else if(key === 's'){
    spaceShip.directionY = 5;    
  }
  
}

function keyReleased(){
  spaceShip.directionY = 0;    
}

//////////////// HELPER FUNCTIONS //////////////////

function getLowerNoisePoint(x){
	var n = noise(x * 0.01 + spaceShip.distance);
	var y = map(n, 0, 1, 900, 300);
	return y;
}

function getHigherNoisePoint(x){
	var n = noise(x * 0.01 + spaceShip.distance);
	var y = map(n, 0, 1, 0, 300);
	return y;
}

function drawSpaceShip(){
	fill(255,0,0);
	noStroke();
	triangle(spaceShip.x, spaceShip.y, 
			spaceShip.x-50, spaceShip.y-10,
			spaceShip.x-50, spaceShip.y+10
			);
}

function handlSpaceShipInteraction(){
	spaceShip.y += spaceShip.directionY;
	spaceShip.distance += 0.1;

	var y = getLowerNoisePoint(spaceShip.x);
	if (spaceShip.y > y) {
		gameOver();
	}
}

function gameOver(){
  noLoop();
  fill(255);
  text("GAME OVER", width/2,height/2);
}