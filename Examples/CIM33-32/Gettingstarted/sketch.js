var hitX = 100;
var hitY = 100;
var threshold = 20;
var hitDistance = 0;
var changeBackground = "white";
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
background(changeBackground);
ellipse(hitX,hitY,threshold*2,threshold*2);
 hitDistance = dist(mouseX,mouseY,hitX,hitY);
console.log("hitDistance" + hitDistance);
//hover state
if(hitDistance <= threshold){
  //do something, if hitdistance less than or equal to 20, 0-20
  fill(127);
  text("click me", hitX,hitY+30);
}else{
  //if top is false, then execute code in else statment
  fill(255);
}
//if(hitDistance > threshold){
  //do something, hitDistance greater than 21, 21-infinity
//  fill(255);
//}
}
function mousePressed(){
  if(hitDistance <= threshold){
    //do something, if hitdistance less than or equal to 20, 0-20
  changeBackground = "blue";
  }else{
    //if top is false, then execute code in else statment
changeBackground = "white";
  }

}
