var bullet1,bullet2,bulletRandom;
var speedBullet,speed1,speed2;
var bulletWeight,weight1,weight2;
var wall,wall1,wall2;
var b1,b2,b3;
var thicknessRandom,thickness1,thickness2,damage;

function setup(){
  createCanvas(1200,400)
bullet1=createSprite(20,200,20,10)
bullet2=createSprite(200,350,20,10)
bulletRandom=createSprite(20,50,20,10)

speedBullet=random(223,321);
speed1=223;
speed2=223;

bulletWeight=random(20,52);
weight1=32;
weight2=32;

wall=createSprite(1200,50,thicknessRandom,100);
wall1=createSprite(1200,200,thickness1,100)
wall2=createSprite(1200,340,thickness2,100);

bullet1.velocityX=3;
bullet2.velocityX=3;
bulletRandom.velocityX=6;

bullet1.shapeColor="white";
bullet2.shapeColor="white";
bulletRandom.shapeColor="white";

b1=createSprite(600,100,1200,10);
b2=createSprite(600,250,1200,10);
b3=createSprite(600,390,1200,10);

b1.shapeColor="white";
b2.shapeColor="white";
b3.shapeColor="white";

thickness1=70
thickness2=40
thicknessRandom=random(22,83);

}
function draw(){
background("black");
text("Random",20,20);
text("Bullet 1",20,150);
text("Bullet 2",20,300);

if(hasCollided(wall,bulletRandom)){
  bulletRandom.velocityX=0;

}
if(isTouching(wall,bullet1)){
damage=(0.5*weight1*speed1*speed1)/(thickness1*thickness1*thickness1);
if(damage>=10){
  //bulletRandom.shapeColor="red";
  bullet1.shapeColor="red";
  text("FATAL",580,20)
  }
  if(damage<=10){
  //bulletRandom.shapeColor="green"
  bullet1.shapeColor=color(0,255,0);
  text("SAFE",580,20)
  }

}
if(isTouching(wall,bullet2)){
  damage=(0.5*weight2*speed2*speed2)/(thickness2*thickness2*thickness2);
  if(damage>=10){
    //bulletRandom.shapeColor="red";
    bullet2.shapeColor="red";
    text("FATAL",580,20)
    }
    if(damage<=10){
    //bulletRandom.shapeColor="green"
    bullet2.shapeColor=color(0,255,0);
    text("SAFE",580,20)
    }

}
  drawSprites();
}