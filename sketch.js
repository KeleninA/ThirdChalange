////🍀
// implement the timer?
var health = 5000;
var maxHealth = 5000;
var minHealth = 0;
let halfway = .5;
let quater = .25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(255);
  let a = createA('https://kelenina.github.io/FinalChallange/', '🍀', '_blank');
  a.position(200, 200);
  
  
  
  if( health != 0) {
    health = min(maxHealth, --health);
  }
  
  
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(10, 10, 200, 20);
  
  noStroke();
  if(health/5000 > halfway) {
    fill(0, 255, 0);
  } else if(health/5000 < halfway && health/5000 > quater) {
    fill('orange');
  } else {
    fill('red');
  }
  fill(0, 255, 0);
  rect(10, 10, map(health, 0, maxHealth, 0, 200), 20);
  stroke(0);
  fill('white');
  if(health>0) {
    circle(200,200,health/16);
  }
  
  
  
}
function mousePressed() {
  health = health + 100;
}
