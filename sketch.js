var snow_img
var snowboyimg

var boy

var invisibleGround
function preload(){

  snow_img=loadImage("snow2.jpg")
  snowboyimg=loadImage("snow_boy.png")
  snowimg=loadImage("snow4.jpg")
  }

function setup() {
  createCanvas(800,400);

  boy=createSprite(200,380)
  boy.addImage(snowboyimg)

  boy.scale=0.6

  //creating an invisibleGround

  ground= createSprite(400,450,800,10)
  ground.visible=false

 
}

function draw() {
  background(snow_img); 
   if(keyDown("space")){
     boy.velocityY=-5
   }
   // add a gravity
   boy.velocityY=boy.velocityY+0.2

   boy.collide(ground)
   snowfall()


  
  drawSprites();
}

function snowfall(){

  if(frameCount%60===0){

    var snow= createSprite(200,10)
    snow.addImage(snowimg)
    snow.velocityY=5
    snow.x= Math.round(random(0,600))
    snow.scale=0.1
    



  }

}