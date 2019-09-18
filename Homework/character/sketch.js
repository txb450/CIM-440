function setup() {
  // put setup code here
  //Sets the size of the canvas
  createCanvas(500,500);
  background(0,255,0);

}

function draw() {
  // put drawing code here
  //left eye
  ellipse(100,100,20,20);
  //right eye
  ellipse(140,100,20,20);

  //mouth
  rect(75,200,100,30); //rect starts draing from left hand corner

  strokeWeight(5);
  point(30,27);

  //mouth line
  strokeWeight(1);
  line(80,215,180,215);

  //width/2 center point of width, height/2 center point of height
  //console/og("width"+ width);
  //console.log("height"+ height);

  triangle(width/2,height/2,100,100,300,300);
}
