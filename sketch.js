var movingRect,fixedRect


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,200,50,50)
fixedRect=createSprite(100,300,100,100)
movingRect.debug=true
fixedRect.debug=true
movingRect.shapeColor="green"
fixedRect.shapeColor="green"
movingRect.velocityX=-4
fixedRect.velocityX=4
movingRect.velocityY=4
fixedRect.velocityY=-4



}

function draw() {
  background(255,255,255);  
 
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2){  
      movingRect.velocityX=-1*movingRect.velocityX
      fixedRect.velocityX=-1*fixedRect.velocityX
  }
  if( movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
   fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 ){
     movingRect.velocityY=-1*movingRect.velocityY
     fixedRect.velocityY=-1*fixedRect.velocityY
  }
  drawSprites();
}