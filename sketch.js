var box;
function setup() {
  createCanvas(1000,1000);
  box=createSprite(150,150,100,100);
  box.shapeColor="red"
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.x=box.x+10  
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.x=box.x-10  
  }

  if (keyIsDown(UP_ARROW)) {
    box.y=box.y-10  
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.y=box.y+10  
  }


  drawSprites();
  

}




