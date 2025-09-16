function setup() {
  createCanvas(600, 800);
  background(200);


}

function draw() {

  //helicopter
  stroke('#FAC019');
  strokeWeight(10);
  line(300, 101, 300, 145);

  noStroke();
  fill('#FFE999');
  ellipse(256, 101, 106, 12);
  ellipse(354, 101, 106, 12);

  // head, body
  fill('#23ABF1');
  circle(305, 311, 334);
  circle(305, 548, 280);

  //white parts
  fill('white');
  circle(311, 337, 260); //head, body
  circle(311, 518, 200);
  circle(145, 491, 74); //hands
  circle(461, 491, 74);
  circle(272, 221, 83); //eyes
  circle(342, 221, 83);
  circle(211, 677, 95); //feets
  circle(376, 677, 95);

  //nose, mouth
  stroke('black');
  strokeWeight(5);
  line(304, 286, 304, 359);
  line(304, 359, 276, 370);
  line(304, 359, 343, 370);

  noStroke();
  fill('red');
  circle(300, 271, 40);

  //eyes
  fill('black');
  circle(280, 223, 24);
  circle(330, 223, 24);

  // neck
  fill('red');
  rect(200, 430, 210, 23);
  //bell
  fill('#FAC019');
  circle(305, 454, 48);

}
