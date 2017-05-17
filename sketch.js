var song;
var img;  // Declare variable 'img'.
function preload() {
  img = loadImage("musicbot.jpg");  // Load the image
  song = loadSound('[2009] WattsonHi - Serenade.mp3');
}

function setup() {
  createCanvas(720, 400);
  createCanvas(720, 200);
  background(255,0,0);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, 250, 250);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}

