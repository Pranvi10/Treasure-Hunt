var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("aladdin_cave2.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  //text(mouseX,200,30);
  //text(mouseY,260,30);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    stroke("black");
    strokeWeight(10);
    fill("white");
    textSize(40);
    text("TREASURE UNLOCKED!!",250, 200);
  }

  drawSprites()
}