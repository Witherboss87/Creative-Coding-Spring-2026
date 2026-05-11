var leftEyebrowX = 150;
var rightEyebrowX = 220;
var leftEyebrowY = 195;
var rightEyebrowY = 195;
var leftBridgeX = 190;
var rightBridgeX = 210;
var chinX1 = 175;
var chinX2 = 200;
var chinX3 = 225;
var chinY1 = 317;
var chinY2 = 330;
var chinY3 = 317;


function setup() {
  createCanvas(400, 500);
  movementLeftBridgeX = Math.floor(Math.random() * 10) + 1;
  movementRightBridgeX = Math.floor(Math.random() * 10) + 1;
  movementLeftEyeBrowy = Math.floor(Math.random() * 10) + 1;
  movementRightEyeBrowy = Math.floor(Math.random() * 10) + 1;
  movementChinX = Math.floor(Math.random() * 10) + 1;
  movementChinY = Math.floor(Math.random() * 10) + 1;
}

function draw() {
  background(50);
  strokeWeight(0);
  //shirt color
  fill(200)
  rect(100,335,200,200)
  //left shoulder
  circle(100,385,100)
  //right shoulder
  circle(300,385,100)
  //hair
  fill(165, 42, 42)
  ellipse(200,185,160,140)
  //beard
  rect(125,250,150,80)
  triangle(125,330,165,330,165,345)
  triangle(275,330,235,330,235,345)
  //skin
  fill(255, 228, 196)
  //left arm
  rect(50,385,50,150)
  //right arm
  rect(300,385,50,150)
  //temple
  rect(125,200,150,50)
  //forehead
  ellipse(200,200,150,150)
  //cheeks
  ellipse(200,250,150,150)
  //nose
  strokeWeight(2);
  ellipse(200,250,40,30);
  line(leftBridgeX,240,leftBridgeX,220);
  line(rightBridgeX,240,rightBridgeX,220);
  //move the bridge of the nose left and right at different speeds
  if (leftBridgeX <= 180 || leftBridgeX >= 190){
    movementLeftBridgeX *= -1;
  }
  if (rightBridgeX <= 209 || rightBridgeX >= 220){
    movementRightBridgeX *= -1;
  }

  strokeWeight(0);
  rect(190,230,20,40);
  //swept hair
  fill(165,42,42)
  quad(160,125,230,180,270,170,245,130)
  ellipse(210,127,55,5)
  //sidburns, beard, mustache
  fill(165, 42, 42)
  rect(165,265,70,80)
  triangle(125,230,125,330,145,330)
  triangle(275,230,275,330,255,330)
  //left eyebrow
  rect(leftEyebrowX,leftEyebrowY,30,5)
  //right eyebrow
  rect(rightEyebrowX,rightEyebrowY,30,5);
  //move both eyebrows up and down at different speeds
  if (rightEyebrowY <= 180 || rightEyebrowY >= 195) {
   movementRightEyeBrowy *= -1;
  }
  if (leftEyebrowY <= 165 || leftEyebrowY >= 195) {
    movementLeftEyeBrowy *= -1;
  }
  //chin color
  fill(255, 228, 195)
  rect(175,275,50,42)
  triangle(chinX1,chinY1,chinX2,chinY2,chinX3,chinY3)
  if (chinX1 <=0 || chinX3 >= 400) {
    movementChinX *= -1;
  }
  if (chinY1 <=0 || chinY2 >= 500) {
    movementChinY *= -1;
  }
  //eyes
  fill(248, 248, 255)
  ellipse(165,215,30,15)
  ellipse(235,215,30,15)
  //blue iris
  fill(70, 130, 180)
  circle(165,215,15)
  circle(235,215,15)
  //pupils
  strokeWeight(8)
  point(165,215)
  point(235,215)
  strokeWeight(2)
  //eylids
  fill(255, 228, 196)
  arc(165,215,30,15,PI,0)
  arc(235,215,30,15,PI,0)
  //allow the eyebrows, bridge of the nose, and chin to move at different speeds and directions
  rightEyebrowY += movementRightEyeBrowy;
  leftEyebrowY += movementLeftEyeBrowy;
  leftBridgeX += movementLeftBridgeX;
  rightBridgeX += movementRightBridgeX;
  chinX1 += movementChinX;
  chinX2 += movementChinX;
  chinX3 += movementChinX;
  chinY1 += movementChinY;
  chinY2 += movementChinY;
  chinY3 += movementChinY;
  
}
