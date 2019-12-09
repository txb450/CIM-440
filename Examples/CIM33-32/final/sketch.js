var happy;
var playlist;
var sad;
var mellow;
var angry;
var grinding;




function setup() {
  // put setup code here
  createCanvas(800,700);

  happy = new Clickable();     //Create button
happy.locate(50, 50);        //Position Button
happy.resize(100,100);      // width height
happy.color = "Orange";
happy.text = "happy";
happy.onPress = function(){  //When myButton is pressed
  // happy.color = "black";       //Change button color
  //do an action
  playlist.html('<iframe src="https://open.spotify.com/embed/playlist/2EVj7U5s3uCaRzMOuznYdB" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');

  }

  happy.onRelease = function(){  //When myButton is pressed
    // happy.color = "purple";       //Change button color
    //do an action
    }

    happy.onHover = function(){  //When myButton is pressed
      happy.color = "gold";       //Change button color
      //do an action
      }

      happy.onOutside = function(){  //When myButton is pressed
        happy.color = "orange";       //Change button color
        //do an action
        }

        playlist = createSpan();

        sad = new Clickable();
 sad.locate(150, 50);        //Position Button
 sad.resize(100,100);      // width height
 sad.color = "blue";
 sad.text = "sad";
 sad.onPress = function(){

   playlist.html('<iframe src="https://open.spotify.com/embed/playlist/6vbetH32Fk2oRjeznWkKtx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')

}

sad.onHover = function(){
  sad.color = "navy blue";
}
sad.onOutside = function(){
  sad.color = "blue";
}
      mellow = new Clickable();
mellow.locate(250,50);
mellow.resize(100,100);
mellow.color = "yellow";
mellow.text = "mellow";
mellow.onPress = function(){
  playlist.html('<iframe src="https://open.spotify.com/embed/playlist/1w4ewZUfzwa8eyWkQAf8WY" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')
}

mellow.onHover = function(){
  mellow.color = "gold";
}
mellow.onOutside = function(){
  mellow.color = "yellow"
}
      angry = new Clickable();
angry.locate(350,50);
angry.resize(100,100);
angry.color = "red";
angry.text = "angry";
angry.onPress = function(){
  playlist.html('<iframe src="https://open.spotify.com/embed/playlist/7L08IETH8EQmm7k4r8rivb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')
}
angry.onOutside = function(){
  angry.color = "red";
}
angry.onHover = function(){
  angry.color = "white"
}

        grinding = new Clickable();
 grinding.locate(450,50);
 grinding.resize(100,100);
 grinding.color = "green";
 grinding.text = "grinding";
 grinding.onPress = function(){
   playlist.html('<iframe src="https://open.spotify.com/embed/playlist/5iQ0qBTxtuSZYsVDsBYxHQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')
 }
 grinding.onOutside = function(){
   grinding.color = "green"
 }
 grinding.onHover = function(){
   grinding.color = "white"
 }
}//functionsetup end

function draw() {
  // put drawing code here

  background("black");

  fill("white");
  text("Explore how you feel! Let the music guide your emotions!", 300,20);

  happy.draw();
  sad.draw();
  mellow.draw();
  angry.draw();
  grinding.draw();

}
