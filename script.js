/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
//var pattern = [2, 5, 4, 6, 2, 1, 3, 4];
var pattern = [1, 2, 3, 4, 5, 6];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var numOfMistakes = 0;

function patternp(pattern)
{
  
    for (var i = pattern.length - 1; i > 0; i--) 
    {
      //select random index
        var k = Math.floor(Math.random() * (i + 1));
      //place index in temp variable
       var temp = pattern[i];
      //switch indexes
        pattern[i] = pattern[k];
        pattern[k] = temp;
    }
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  patternp(pattern);
  playClueSequence();
  numOfMistakes = 0;
}

function stopGame() {
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 230,
  2: 300,
  3: 350,
  4: 420,
  5: 470,
  6: 530
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 50;
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
  clueHoldTime = 1000;
}

function winGame() {
  stopGame();
  alert("Congrats. You won!");
  clueHoldTime = 1000;
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

 if (pattern[guessCounter] == btn) {
    //Correct Guess
    if (guessCounter == progress)
    {
      if (progress == pattern.length - 1) 
      {
        //Player Wins
        winGame();
      }
      else if (progress != pattern.length - 1)
      {
        progress++;
        playClueSequence();
      }
    }
     else if (guessCounter != progress) 
    {
      guessCounter++;
    }
  } 
  else 
  {
    //Incorrect Guess
    //Player Loses
    numOfMistakes++;
    playClueSequence();
    if(numOfMistakes == 3)
      {
    loseGame();
      }
  } 

}

function myFunction() {
  document.getElementById("duck").style.visibility="visible";
}
function myFunction2() {
  document.getElementById("horse").style.visibility="visible";
}
function myFunction3() {
  document.getElementById("cow").style.visibility="visible";
}
function myFunction4() {
  document.getElementById("goat").style.visibility="visible";
}
function myFunction5() {
  document.getElementById("sheep").style.visibility="visible";
}
function myFunction6() {
  document.getElementById("hen").style.visibility="visible";
}
// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
