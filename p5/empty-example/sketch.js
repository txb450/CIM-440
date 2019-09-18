function setup() {
  createCanvas(500,500)
  background('Black')
  // put setup code here
  Colorbutton = createbutton("");
  Colorbutton = createbutton("Click to turn blue")
  Colorbutton.position(20,20);
}

function draw() {
  // put drawing code here
  ellipse(100,100,20,20)
  ellipse(150,150,20,20)
  ellipse(90,90,5,5)
  ellipse(140,140,5,5)
  rect(75,200,100,30)
  line(80,215,180,200)
  Triangle(100,170,30,30)


}
