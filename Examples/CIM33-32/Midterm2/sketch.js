var questions = ["What does the Quarterback do?","How many points is a touchdown?","How many rings does Tom Brady have?","How many points is a saftey?", "Who is the best team in the NFL?","Who is the commissioner of the NFL?","What day do most teams play?","How many teams are in the NFL?","What city does the Dolphins play for?","Who won the 2018 superbowl?"];
var options = ["1) Throw the ball 2) Run the ball","1) 7 points 2) 6 points","1) 5 rings 2) 6 rings","1) 3 points 2) 2 points","1) Eagles there no other correct answer 2) Browns","1) Roger Godell 2)Jake Peralta", "1) Wednesday 2)Sunday"," 1)30 2)32","1) San Fran 2) Miami", "1) the best team on Earth the Philadelphia Eagles 2)The second worst team in the NFL the Patriots"];
var answers = [0,1,1,1,0,0,1,1,1,0];

var buttons = [];

var currentOption = -1; // refers to what button the user has pressed

var currentQuestion = 0;

var answerText = "";

var startTimer = false;

var interval = 5000;
var prevMillis = 0;
var lastQuestion = false;
var correctAnswers = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);

  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0;
  });//end of mousepressed

  buttons[1] = createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1;
  });//end of mousepressed

//end of mousepressed


}//end of setup

function draw() {
  // put drawing code here
  background(255);
  text(questions[currentQuestion], 20,100);
  text(options[currentQuestion], 20,150);



  if(startTimer == true){
    if (answerText == "Correct"){
      background("green");
  }
  if(answerText == "Incorrect"){
  background("red");
}
    text(answerText, 20 ,200);
      if(millis()-prevMillis > interval){
        prevMillis = millis();
        startTimer = false;
        console.log("Timer ended");
      }//end of timer



}


  // if currentOption is not equal to -1
  if(currentOption != -1){
    //do something if currentOption is not equal to -1
    console.log("currentOption " + currentOption);
    if(currentOption  == answers[currentQuestion]){
      console.log("correct");
      answerText = "Correct";
      currentQuestion = currentQuestion + 1;

      // array.length counts how many items are in the array, questions.length has 2 items
      // if currentQuestion == 2
      if(currentQuestion == questions.length){
        currentQuestion = 9;
        correctAnswers = correctAnswers + 1;
        lastQuestion = true;

      }

      //correctAnswers = correctAnswers + 1;

    }else{
      console.log("incorrect");
      answerText = "Incorrect";
      currentQuestion = currentQuestion + 1;
      if(currentQuestion == questions.length){
        currentQuestion = 9;
        lastQuestion = true;

        //What do you want to do when you get to the last question
          //lastQuestion = true;
      }
    }// end of checking if answer correct or incorrect


    //reset to inactive state
    currentOption = -1;
    startTimer = true;
    prevMillis = millis();

  }// end of currentOption =! 1


  if(lastQuestion == true){
    //show score
    var curScore = "Your score is " + correctAnswers;
     text(curScore, 0,0);
  }
}
