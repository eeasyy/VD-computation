let circleX = [];
let circleY = [];
let homeX = [];
let homeY = [];

const GRID = 3;
const circleSize = 200; 
let lerpSpeed = 0.05;

function setup() {
  createCanvas(1080, 1080);
  noStroke();


  
  const CELL = width / (GRID + 1); 
  for (let i = 0; i < GRID; i++) {
    for (let j = 0; j < GRID; j++) {
      let x = CELL * (i + 1);
      let y = CELL * (j + 1);
      circleX.push(x);
      circleY.push(y);
      homeX.push(x);
      homeY.push(y);
    }
  }

}

let clickCount = 0;

function draw() {
  
  background(245, 245, 240);

  for (let i = 0; i < circleX.length; i++) {
    
    // lerp function
    if (clickCount % 2 == 0) {
      circleX[i] = lerp(circleX[i], mouseX, lerpSpeed);
      circleY[i] = lerp(circleY[i], mouseY, lerpSpeed);
    } else {
      circleX[i] = lerp(circleX[i], homeX[i], lerpSpeed);
      circleY[i] = lerp(circleY[i], homeY[i], lerpSpeed);
    }



    switch (i) {
      case 0: fill('red'); break;
      case 1: fill('orange'); break;
      case 2: fill('yellow'); break;
      case 3: fill('lightgreen'); break;
      case 4: fill('teal'); break;
      case 5: fill('skyblue'); break;
      case 6: fill('blue'); break;
      case 7: fill('purple'); break;
      case 8: fill('pink'); break;
      default: fill('white'); break;
    }
    
    circle(circleX[i], circleY[i], circleSize);
 
  }

}

function mouseClicked() {
  clickCount = clickCount + 1;
}