var movingR, fixedR;

function setup() {
  createCanvas(800,400);
  fixedR = createSprite(400, 200, 50, 50);
  fixedR.shapeColor = "red";
  movingR = createSprite(600, 300, 70, 70);
  movingR.shapeColor = "blue";
}

function draw() {
  background(0,200,120);  

  movingR.x = mouseX;
  movingR.y = mouseY;

  if (movingR.x - fixedR.x < movingR.width/2 + fixedR.width/2 &&
    fixedR.x - movingR.x < fixedR.width/2 + movingR.width/2 && 
    movingR.y - fixedR.y < movingR.height/2 + fixedR.height/2 &&
    fixedR.y - movingR.y < fixedR.height/2 + movingR.height/2){

    movingR.shapeColor = "green";
    fixedR.shapeColor = "yellow";

  }
  else {
    movingR.shapeColor = "red";
    fixedR.shapeColor = "blue";
  }

  drawSprites();
}