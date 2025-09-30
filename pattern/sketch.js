const GRID = 2;
const CELL = 1080 / GRID;

function setup() {
 createCanvas(1080, 1080);
 noStroke();
 // frameRate(2);
 noLoop();
}

function draw() {
 background(255, 255, 220);
 const cz = random(40, CELL);
 const sz = random(40, CELL);

 for (let gy = 0; gy < GRID; gy++) {

   for (let gx = 0; gx < GRID; gx++) {
     const cx = gx * CELL + CELL / 2;
     const cy = gy * CELL + CELL / 2;

     push();
     blendMode(MULTIPLY);
     fill('orange');
     circle(cx, cy, cz);
     pop();

     push();
     blendMode(MULTIPLY);
     translate(cx, cy);
     fill('pink');
     rectMode(CENTER);
     rect(0, 0, sz, sz);
     pop();
   }
 }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}

// let peachAnim = [];
// let luigiAnim = [];
// let marioAnim = [];
// let yoshiAnim = [];
// let animations = [];

// let currentAnimation;
// let currentFrame = 0;
// let isPlaying = false;
// let randomIndex = 0;

// function preload() {
//   for (let i = 1; i <= 32; i++) {
//     peachAnim.push(loadImage('peach/PeachSpin' + i + '.png'));
//   }
//   animations.push(peachAnim);

//   for (let i = 101; i <= 132; i++) {
//     marioAnim.push(loadImage('mario/Frame' + i + '.png'));
//   }
//   animations.push(marioAnim);

//   for (let i = 69; i <= 100; i++) {
//     luigiAnim.push(loadImage('luigi/Frame' + i + '.png'));
//   }
//   animations.push(luigiAnim);

//   for (let i = 4; i <= 35; i++) {
//     yoshiAnim.push(loadImage('yoshi/YoshiSpin' + i + '.png'));
//   }
//   animations.push(yoshiAnim);
// }

// function setup() {
//   createCanvas(300, 300);
//   let button = createButton('MARIO KART!');
//   button.position(100, 310);
//   button.mousePressed(playRandomAnimation);
// }

// function draw() {
//   if (isPlaying) {
//     if (!currentAnimation) {
//       isPlaying = false;
//       return;
//     }
    
//     switch (randomIndex) {
//       case 0:
//         background('#FF469F');
//         break;
//       case 1:
//         background('#00BBFF');
//         break;
//       case 2:
//         background('#FFF200');
//         break;
//       case 3:
//         background('#0BEC43');
//         break;
//     }

//     let img = currentAnimation[currentFrame];
//     let newWidth = 100;
//     let ratio = img.height / img.width;
//     let newHeight = newWidth * ratio;
//     image(img, width / 2 - newWidth / 2, height / 2 - newHeight / 2, newWidth, newHeight);

//     if (frameCount % 5 === 0) {
//       currentFrame++;
//     }

//     if (currentFrame >= currentAnimation.length) {
//       currentFrame = 0;
//     }

//   } else {
//     background('white');
//     textAlign(CENTER);
//     fill(0);
//     text('press the button!', width / 2, height / 2);
//   }
// }

// function playRandomAnimation() {
//   randomIndex = floor(random(animations.length));
//   currentAnimation = animations[randomIndex];
//   currentFrame = 0;
//   isPlaying = true;
// }