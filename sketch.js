function setup() {
  createCanvas(800,400);
  one = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
 if(keyDown("up_arrow")) {
   one.velocityY = -6 ;
 }

 if(keyDown("down_arrow")) {
   one.velocityY = +6 ;
 }

  drawSprites();
}
