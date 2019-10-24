var options = ["1) Throw the ball 2) Run the ball","1) 7 points 2) 6 points","1) 5 rings 2) 6 rings","1) 3 points 2) 2 points","1) Eagles there no other correct answer 2) Browns","1) Roger Godell 2)Jake Peralta", "1) Wednesday 2)Sunday"," 1)30 2)32","1) San Fran 2) Miami", "1) the best team on Earth the Philadelphia Eagles 2)The second worst team in the NFL the Patriots"];
var answers = [0,1,1,1,0,0,1,1,1,0];
var questions = ["What does the Quarterback do?","How many points is a touchdown?","How many rings does Tom Brady have?","How many points is a saftey?", "Who is the best team in the NFL?","Who is the commissioner of the NFL?","What day do most teams play?","How many teams are in the NFL?","What city does the Dolphins play for?","Who won the 2018 superbowl?"];

var buttons = [];

var currentQuestion = 0;

var currentOption = -1;

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


}

function draw() {
  // put drawing code here
background(255);
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
}
}
