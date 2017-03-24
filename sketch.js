var r = 255;
var g = 255;
var b = 0;

function setup() {
  createCanvas(1640, 1480);
}
var CircSize = 25

function draw() {
  if (mouseIsPressed) {
    fill(r, g, b);
    ellipse(mouseX, mouseY, CircSize, CircSize);

    r = random(255);
    g = random(255);
    b = random(255);
  }
}
