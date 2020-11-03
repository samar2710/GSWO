var car;
var wall;
var speed;
var weight;
var deformation;
function setup(){
  createCanvas(1000,400);
  wall=createSprite(900,200,60,height/2);
  car=createSprite(50,200,50,50);
  wall.shapeColor=(80,80,80);
  speed=random(55,90)
  weight=random(400,1500);
  car.velocityX=speed;
  deformation=(0.5*weight*speed*speed/22500);
}

function draw(){
  background(0);  
if(wall.x-car.x<car.width+wall.width){
  car.velocityX=0;
  if(deformation<100){
    car.shapeColor=color(0, 255, 0);

  }
  if(deformation>100 && deformation<180){
    car.shapeColor=color(230, 230, 0);

  }
  if(deformation>180){
    car.shapeColor=color(255, 0, 0);
  }
}
  drawSprites();
}