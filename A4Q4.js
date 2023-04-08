/* NMD 105 
4/6/23

Assignment: A4Q4


Task:Pattern from an array

*/
function setup() {
  // Create the canvas
  createCanvas(380, 380);
  sprites = ["addFlower1", "addFlower2", "addFlower3", "addFlower4", "addFlower5"];
  spritesPerRow = 20
  spritesPerColumn = 20;
  offsetLeft = width / spritesPerRow;
  offsetDown = height / spritesPerColumn;
  noLoop();
}

function draw() {
  background("lightblue")
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = random(sprites);
    for (let column = 0; column < spritesPerColumn; column++) {
      chooseSprite(thisSprite, counter * offsetLeft, column * offsetDown);
    }
  }
}

function chooseSprite(spriteName, spriteX, spriteY) {
  if (spriteName == "addFlower") {
    addFlower1(spriteX, spriteY);
  } else if (spriteName === "addFlower2") {
    addFlower2(spriteX, spriteY);
  } else if (spriteName == "addFlower3") {
    addFlower3(spriteX, spriteY);
  } else if (spriteName == "addFlower4") {
    addFlower4(spriteX, spriteY);
  } else if (spriteName == "addFlower5") {
    addFlower5(spriteX, spriteY);
  }
}

function addFlower1(x, y) {
  // Set colors
  fill("red")
  translate(50, 50)
  //move to top left corner of canvas
  for (let i = 0; i < 20; i++) {
    ellipse(10, 5, 10, 20);
    rotate(PI / 5);
  }
}

function addFlower2(x, y) {
  fill("royalblue");
  translate(50, 50, 100)
  //move blue flower to center
  for (let i = 0; i < 20; i++) {
    ellipse(10, 9, 23, 30);
    rotate(PI / 5);
  }
}

function addFlower3(x, y) {
  fill("salmon");
  translate(50, 50)
  //move salmon flower to bottom right 
  for (let i = 0; i < 20; i++) {
    ellipse(10, 13, 18, 15);
    rotate(PI / 5);
  }
}

function addFlower4(x, y) {
  // Set colors
  fill("tomato")
  translate(50, 50)
  //move to top left corner of canvas
  for (let i = 0; i < 20; i++) {
    ellipse(10, 6, 10, 30);
    rotate(PI / 10);
  }
}

function addFlower5(x, y) {
  // Set colors
  fill("darkslategrey")
  translate(50, 50)
  //move to top left corner of canvas
  for (let i = 0; i < 20; i++) {
    ellipse(10, 6, 10, 30);
    rotate(PI / 10);
  }
}
