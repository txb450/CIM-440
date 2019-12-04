
function setup() {
  // put setup code here
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
// # => designate an id, find an id = container0
//.html ifects html or text into another html tag
  select("#container0").html("<h1>Your sketch title here!<h1>");
//.style("css" property", "value")

  select("#containetr0").style("width", "400px");//setting width of container0
  select("#container0").style("margin", "20px auto");//center our container, margin 0 auto; 0 refers to the top and bottom spacingof our container, the autp refers to the left and right spacing of Your
  //to center our container0
  cnv.parent("#container0");
  //select("#container0").html('<iframe width = "560" height="315" src="https://www.youtube.com/watch?v=0vjjS8Gf7s8" frameborder="0" allow= "accelerometer; autoplay; encrypted-media; gyroscope; picture - in-picture" allowfullscreen></iframe>');
  select('body').stlye("background-color","red");
}

function draw() {
  // put drawing code here
  background(0);
}
