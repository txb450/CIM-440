var happy;
var playlist;

function setup() {
  // put setup code here
  createCanvas(800,700);

  happy = new Clickable();     //Create button
happy.locate(50, 50);        //Position Button
happy.resize(300,300);      // width height
happy.color = "green";
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
      happy.color = "red";       //Change button color
      //do an action
      }

      happy.onOutside = function(){  //When myButton is pressed
        happy.color = "blue";       //Change button color
        //do an action
        }

        playlist = createSpan();
}

function draw() {
  // put drawing code here

  background("black");

  fill("white");
  text("stuff goes here", 50,20);

  happy.draw();


}
