var spaceShip;

function setup() {
  createCanvas(1900, 925);

  spaceShip = {
    x: 200,
    y: height/2,
    directionY: 0,
  }
  
  textSize(32);
  textAlign(CENTER);
}

function draw() {
  background(0);
  
  fill(255,0,0);
  noStroke();
  triangle(spaceShip.x, spaceShip.y, 
           spaceShip.x-50, spaceShip.y-10,
           spaceShip.x-50, spaceShip.y+10
          );
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

}

function getHigherNoisePoint(x){

}

function drawSpaceShip(){

}

function handlSpaceShipInteraction(){
 
}

function gameOver(){
  noLoop();
  fill(255);
  text("GAME OVER", width/2,height/2);
}