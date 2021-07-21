window.draw = draw;
window.mouseClicked = mouseClicked;

/*import gsap from "./gsap.min.js";*/
import Button from "./TamagotchiButton.js";
import Egg from "./Eggs.js";
import RabbitStartScreen from "./RabbitStartScreen.js";
import RabbitState1 from "./RabbitState1.js";
import RabbitState2 from "./RabbitState2.js";
import SpeechBubble from "./SpeechBubble.js";
import SleepItem from "./SleepItem.js";
import EatItem from "./EatItem.js";

//images
let victory = loadImage("victory.png");
let loose = loadImage("DeadRabbit.PNG");

//states of development rabbit and screen change
let grow = "start";

//click counter for growth
let counter = 0;

//counter parameter
let foodCounter = 2;
let sleepCounter = 3;
let attentionCounter = 4;

//choice of color
let colorState = 0;

//animation click button
let sleep = false;
let eat = false;

//game state
let gameover = false;
let win = false;

//get classes
//start button
let startButton = new Button(240, 700, 610, 100, "S T A R T", 505, 760);

//restart button
let restartButton = new Button(425, 750, 170, 40, "R E S T A R T", 450, 775);

//start screen rabbit
let rabbitStartScreen = new RabbitStartScreen(350, 250, 1.0);

//eggs
let egg = new Egg(60, 200, 1.0, 135, 206, 235);
let egg2 = new Egg(230, 200, 1.0, 218, 112, 214);
let egg3 = new Egg(400, 200, 1.0, 128, 128, 128);

//button eggs
let button = new Button(140, 650, 100, 40, "1", 185, 675);
let button2 = new Button(480, 650, 100, 40, "2", 525, 675);
let button3 = new Button(820, 650, 100, 40, "3", 865, 675);

//action buttons
let feedButton = new Button(420, 750, 100, 40, "FEED", 445, 775);
let sleepButton = new Button(560, 750, 100, 40, "SLEEP", 580, 775);
let watchButton = new Button(500, 820, 100, 40, "WATCH", 518, 845);

//speech bubbles
let speechBubble = new SpeechBubble(
  50,
  130,
  1.0,
  "T A M (E)   A   R A B B I T",
  100,
  220
);
let speechBubble2 = new SpeechBubble(
  250,
  100,
  1.0,
  "C H O O S E   Y O U R   E G G . . .",
  310,
  190
);

let speechBubble3 = new SpeechBubble(
  120,
  120,
  1.0,
  "T A K E  C A R E  O F  T H E  R A B B I T !  ",
  150,
  210
);

let speechBubble4 = new SpeechBubble(
  100,
  80,
  1.0,
  "Y O U  A R E  D O I N G  G R E A T !",
  150,
  170
);

let speechBubble5 = new SpeechBubble(
  130,
  90,
  1.0,
  "A L L  G R O W N  U P  A N D  H A P P Y !",
  160,
  180
);

let speechBubble6 = new SpeechBubble(
  100,
  70,
  0.8,
  "P A Y  M O R E  A T T E N T I O N !",
  120,
  145
);

//states rabbit
let rabbitState1 = new RabbitState1(200, 240, 0.8);
let rabbitState2 = new RabbitState2(220, 150, 1.0);

//items
let sleepItem = new SleepItem(620, 400, 0.6, 0);
let sleepItem2 = new SleepItem(680, 330, 0.6, 0);

let sleepItem1_1 = new SleepItem(670, 360, 0.6, 0);
let sleepItem2_2 = new SleepItem(730, 290, 0.6, 0);

let eatItem = new EatItem(200, 500, 0.7);

//draw
function draw() {
  clear();

  //background
  noStroke();
  fill(255, 255, 255);
  rect(0, 0, 1050, 900);
  strokeWeight(1);

  //startscreen
  if (grow === "start") {
    stroke(0, 0, 0);
    speechBubble.display();
    rabbitStartScreen.display();

    //start button
    startButton.display();

    //egg screen
  } else if (grow === 0) {
    //draw eggs
    egg.display();
    egg2.display();
    egg3.display();

    //draw buttons
    button.display();
    button2.display();
    button3.display();

    //draw speechbubble
    speechBubble2.display();
  }

  //rabbit state 1 screen
  else if (grow === 1) {
    //draw rabbit state 1
    rabbitState1.display();

    //draw action buttons
    feedButton.display();
    sleepButton.display();
    watchButton.display();

    //draw items
    sleepItem.colorState = colorState;
    sleepItem.display();
    sleepItem2.display();
    eatItem.display();

    //draw speech bubble
    stroke(0, 0, 0);
    speechBubble3.display();

    //show counter
    strokeWeight(1);
    fill(0, 0, 0);
    text("Food:" + foodCounter, 50, 780);
    text("Sleep:" + sleepCounter, 50, 820);
    text("Attention:" + attentionCounter, 50, 860);

    //rabbit state 2 screen
  } else if (grow === 2) {
    //draw rabbit state 2
    rabbitState2.colorState = colorState;
    rabbitState2.display();

    //draw action buttons
    feedButton.display();
    sleepButton.display();
    watchButton.display();

    //draw items
    sleepItem1_1.colorState = colorState;
    sleepItem2_2.colorState = colorState;
    sleepItem1_1.display();
    sleepItem2_2.display();
    eatItem.display();

    //show counter
    fill(0, 0, 0);
    textSize(26);
    stroke(0, 0, 0);
    text("Food:" + foodCounter, 50, 780);
    text("Sleep:" + sleepCounter, 50, 820);
    text("Attention:" + attentionCounter, 50, 860);
  }

  // set counter
  if (counter === 5 && win === false) {
    grow = 2;
    speechBubble4.display();
  }

  //win
  if (counter >= 10 && grow === 2) {
    grow = "end";
    win = true;
  }
  if (grow === "end" && win === true) {
    restartButton.display();
    speechBubble5.display();
    image(victory, 280, 320, 630, 400);
  }

  //game over
  if (foodCounter === 0 || sleepCounter == 0 || attentionCounter == 0) {
    grow = "end";
    restartButton.display();
    speechBubble6.display();
    image(loose, 320, 250, 450, 450);
  }
  if (gameover === true) {
    //reset counter
    counter = 0;
    foodCounter = 2;
    sleepCounter = 3;
    attentionCounter = 4;
    grow = "start";
  }
}

function mouseClicked() {
  //choose egg and color
  if (button.hitTest() && grow === 0) {
    console.log("b1");
    grow = 1;
    colorState = "blue";
    rabbitState1.colorState = colorState;
  } else if (button2.hitTest() && grow === 0) {
    console.log("b2");
    grow = 1;
    colorState = "pink";
    rabbitState1.colorState = colorState;
  } else if (button3.hitTest() && grow === 0) {
    console.log("b3");
    grow = 1;
    colorState = "grey";
    rabbitState1.colorState = colorState;
  }

  //start button
  if (startButton.hitTest() && grow === "start") {
    grow = 0;
    gameover = false;
    win = false;
  }

  //restartButton
  if (restartButton.hitTest() && grow === "end") {
    gameover = true;
  }

  //feed button
  if (
    (feedButton.hitTest() && grow === 1) ||
    (feedButton.hitTest() && grow === 2)
  ) {
    foodCounter = foodCounter + 1;
    sleepCounter = sleepCounter - 1;
    eatItem.eat = true;

    //animation
    gsap.to(eatItem, {
      duration: 0.9,
      ease: "linear",
      x: 300,
      onComplete: () => {
        doMyAnimation();
      },
    });
  } else if (grow === 1 || grow === 2) {
    eatItem.eat = false;
  }

  //sleep button
  if (
    (sleepButton.hitTest() && grow === 1) ||
    (sleepButton.hitTest() && grow === 2)
  ) {
    sleepCounter = sleepCounter + 1;
    attentionCounter = attentionCounter - 1;
    rabbitState1.sleep = true;
    rabbitState2.sleep = true;
    sleepItem.sleep = true;
    sleepItem2.sleep = true;
    sleepItem1_1.sleep = true;
    sleepItem2_2.sleep = true;
  } else if (grow === 1 || grow === 2) {
    rabbitState1.sleep = false;
    rabbitState2.sleep = false;
    sleepItem.sleep = false;
    sleepItem2.sleep = false;
    sleepItem1_1.sleep = false;
    sleepItem2_2.sleep = false;
  }

  //watch button
  if (
    (watchButton.hitTest() && grow === 1) ||
    (watchButton.hitTest() && grow === 2)
  ) {
    attentionCounter = attentionCounter + 1;
    foodCounter = foodCounter - 1;
  }

  //counter
  if (
    (sleepButton.hitTest() && grow === 1) ||
    (feedButton.hitTest() && grow === 1) ||
    (watchButton.hitTest() && grow === 1)
  ) {
    counter = counter + 1;
  }

  if (
    (feedButton.hitTest() && grow === 2) ||
    (sleepButton.hitTest() && grow === 2) ||
    (watchButton.hitTest() && grow === 2)
  ) {
    counter = counter + 1;
  }
}

//animation function
function doMyAnimation() {
  gsap.to(eatItem, {
    duration: 2,
    ease: "easOutSquad",
    x: 200,
  });
}
