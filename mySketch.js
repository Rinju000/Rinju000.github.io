const num = 100;
const times = 4;
const variation = 2.0
let vecLocation = [];
let vecVelocity = [];

function setup() {
  frameRate(30);
  colorMode(HSB, 360, 100, 100, 100);
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < times; i = i + 1) {
  vecLocation[i] = createVector(width / 2.0, height / 2.0);    
  }
}

function draw() {
  background(0, 20);
  for(let i = 0; i < times; i = i + 1) {
  vecVelocity[i] = createVector(num * int(random(-variation, variation)), 
                             num * int(random(-variation, variation)));
  stroke(70, 100, 100, 100);
  line(vecLocation[i].x, vecLocation[i].y, 
       vecLocation[i].x + vecVelocity[i].x, 
       vecLocation[i].y + vecVelocity[i].y);
  vecLocation[i].add(vecVelocity[i]);
  if(vecLocation[i].x < 0.0) {
    vecLocation[i].x = 0.0;
    vecVelocity[i].x = abs(vecVelocity[i].x);
  }
  if(vecLocation[i].x > width) {
    vecLocation[i].x = width;
    vecVelocity[i].x = abs(vecVelocity[i].x) * -1.0;
  }
  if(vecLocation[i].y < 0.0) {
    vecLocation[i].y = 0.0;
    vecVelocity[i].y = abs(vecVelocity[i].y);
  }
  if(vecLocation[i].y > height) {
    vecLocation[i].y = height;
    vecVelocity[i].y = abs(vecVelocity[i].y) * -1.0;
  }
  }
}
