function hasCollided(object1,object2){
if(object1.x-object2.x<(object1.width/2+object2.width/2+10)){
object2.velocityX=0;
damage=(0.5*bulletWeight*speedBullet*speedBullet)/(thicknessRandom*thicknessRandom*thicknessRandom);
if(damage>=10){
//bulletRandom.shapeColor="red";
bulletRandom.shapeColor="red";
text("FATAL",580,20)
}
if(damage<=10){
//bulletRandom.shapeColor="green"
bulletRandom.shapeColor=color(0,255,0);
text("SAFE",580,20)
}

}
}
function isTouching(object3,object4){

if(object3.x-object4.x<=(object3.width/2+object4.width/2+10)){
    object4.velocityX=0;

}

}