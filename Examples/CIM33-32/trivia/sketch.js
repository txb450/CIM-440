var questions = ["is Iceland always covered in ice?","What ocean lies east of the US?"];
var options = ["1) true 2) false","1) pacific 2) eastern 3) indian 4) atlantic"];
var answers = [1,3];


var buttons = [];



var currentOption = -1;

var currentQuestion = 0;

var answerText = "";

function setup() {
  // put setup code here
createCanvas(400,400);

buttons[0] = createButton("1");
buttons[0].position(10,300);
buttons[0].mousePressed(function(){
  currentOption = 0;
});// end of mousePressed

buttons[1] = createButton("2");
buttons[1].position(50,300);
buttons[1].mousePressed(function(){
  currentOption = 1;
});

buttons[2] = createButton("3");
buttons[2].position(100,300);
buttons[2].mousePressed(function(){
  currentOption = 2;
});


buttons[3] = createButton("4");
buttons[3].position(150,300);
buttons[3].mousePressed(function(){
  currentOption = 3;
});

}

function draw() {
  // put drawing code here
background(255);
text(questions[currentQuestion], 20,100);
text(options[currentQuestion], 20,150);

text(answerText, 20,200);

//if currentOption is not equal to -1
if(currentOption != -1){
  //do something if currentOption is not equal to -1
if(currentOption == answers[currentQuestion]){
  console.log("correct");
  answerText = "correct";

  currentQuestion = currentQuestion + 1;

  if(currentQuestion == questions.length){
    currentQuestion = 0;
  }
}
else{
  console.log("incorrect");
  answerText = "incorrect"
}
currentOption = -1;
}//end of current option
}//end of draw
