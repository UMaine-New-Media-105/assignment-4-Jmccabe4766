/* NMD 105 
3/29/23

Assignment: A4Q


Task: Draw Shape With a Loop

*/
function setup() {
  // Create the canvas
  createCanvas(370, 370);

}

function draw() {
  background("yellow")
  // add 5 different flowers
  addFlower();

  addFlower2();

  addFlower3();

  addFlower4();

  addFlower5();
}


function addFlower(x, y) {
  // Set colors
  fill("red")
  translate(30, 100)
  //move to top left corner of canvas
  for (let i = 0; i < 20; i++) {
    ellipse(10, 5, 10, 20);
    rotate(PI / 5);
  }
}

function addFlower2(x, y) {
  fill("royalblue");
  translate(100, 90)
  //move blue flower to center
  for (let i = 0; i < 20; i++) {
    ellipse(10, 9, 23, 30);
    rotate(PI / 5);
  }
}

function addFlower3(x, y) {
  fill("salmon");
  translate(80, 10)
  //move salmon flower to bottom right 
  for (let i = 0; i < 20; i++) {
    ellipse(10, 13, 18, 15);
    rotate(PI / 5);
  }
}

function addFlower4(x, y) {
  // Set colors
  fill("tomato")
  translate(70, 80)
  //move to top left corner of canvas
  for (let i = 0; i < 20; i++) {
    ellipse(10, 6, 10, 30);
    rotate(PI / 10);
  }
}

function addFlower5(x, y) {
  // Set colors
  fill("darkslategrey")
  translate(60, 30)
  //move to top left corner of canvas
  for (let i = 0; i < 20; i++) {
    ellipse(10, 6, 10, 30);
    rotate(PI / 10);
  }
}


Link: https://editor.p5js.org/joseph.mccabe/sketches/6Sb4cjc0d
