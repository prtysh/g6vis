// Bubble class
let system;
var canvas;

let data; // Global object to hold results from the loadJSON call
let bubbles = []; // Global array to hold all bubble objects

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-10');
  loadData();
}

function draw() {
  background(255);

  // Display all bubbles
  // for (let i = 0; i < bubbles.length; i++) {
  //   bubbles[i].display();
  //   bubbles[i].rollover(mouseX, mouseY);
  // }
  for (let i = 0; i < links.length; i++) {
    links[i].display();
  }

  for (const [key, value] of Object.entries(bubbles)) {
    value.display();
    value.rollover(mouseX, mouseY);
  }
  // Label directions at bottom
  textAlign(CENTER);
}