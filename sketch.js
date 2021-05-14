var fixedRect, movingRect;
var rect1, rect2;
var r3,r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  rect1 = createSprite(300,500,70,20);
  rect1.shapeColor = "white";
  rect2 = createSprite(1000,100,30,40);
  rect2.shapeColor = "orange";

  r3 = createSprite(100,400,30,70);
  r3.shapeColor = "lightblue";
  r3.velocityY = 1;

  r4 = createSprite(100,800,40,60);
  r4.shapeColor = "coral";
  r4.velocityY = -3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "yellow";
  }
  else if(isTouching(movingRect,rect2)){
    rect2.velocityX = -5;
  }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }
  bounceOff(r3,r4);
  drawSprites();
}