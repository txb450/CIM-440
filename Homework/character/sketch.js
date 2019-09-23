var colorButton

function setup() {
  // put setup code here
createCanvas(500,500)
background("black");
colorButton = createButton("Orange")

colorButton.mousePressed(function(){
  background("purple");
});
}
function draw() {
  // put drawing code here
ellipse(100,100,20,20);
ellipse(140,100,20.20);
point(100,100);
point(140,100);
rect(75,200,100,30);
ellipse(80,200,10,10);
ellipse(180,200,10,10);
rect(100,80,40,20);
rect(140,80,40,20);
ellipse(250,250,300,300);

}
