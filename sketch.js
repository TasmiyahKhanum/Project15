var sea,ship,pirate,cash,diamonds,jewelry,sword,gm0;
var seaimg,shipimg,pirateimg,cashImg,diamondsImg,jewelryImg,swordImg,gm0img;
var cashG,diamondsG,jewelryG,swordGroup,pshipG;
var treasureCollection = 0;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  seaimg = loadImage("sea.png");
  shipimg = loadImage("ship.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  pirateimg = loadImage("pship.png");
  gm0img = loadImage("gameOver.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200);
  sea.addImage(seaimg);
  sea.velocityY = 4;

  ship = createSprite(290,390,20,20);
  ship.addImage(shipimg);
  ship.scale=0.1;

  cashG=new Group();
  diamondsG=new Group();
  jewelryG=new Group();
  swordGroup=new Group();
  pshipG = new Group();
}

function draw(){

  if(gameState===PLAY){
    if(sea.y > 400 ){
      sea.y = height/2;
    }
    edges= createEdgeSprites();
    ship.bounceOff(edges);
    ship.x=World.mouseX;
    if(ship.x < 60)
    {
      ship.x = 60;
    }
      
    if(ship.x > 340)
    {
      ship.x = 340;
    }
    createCash();
    createDiamonds();
    createjewelry();
    createSword();
    createPirates();

    if (cashG.isTouching(ship)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(ship)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+10; 
    }
    else if(jewelryG.isTouching(ship)) {
      jewelryG.destroyEach();
      treasureCollection= treasureCollection + 15;
    }
    else{
      if(swordGroup.isTouching(ship)||pshipG.isTouching(ship)) {
        gameState=END;
      }
    }
  }

  if(gameState===END){
    sea.velocityY = 0;
    ship.x=200;
    ship.y=300;
    cashG.destroyEach();
    diamondsG.destroyEach();
    jewelryG.destroyEach();
    swordGroup.destroyEach();
    pshipG.destroyEach();
    gm0=createSprite(200,200);
    gm0.addImage(gm0img);
    gm0.scale=0.5;
} 
drawSprites();
textSize(12);
fill(255);
text("Treasure: "+ treasureCollection,10,30);
}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.07;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.02;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
  }
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.07;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.06;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

function createPirates(){
  if (World.frameCount % 630 == 0) {
  var pirate = createSprite(Math.round(random(50, 350),40, 10, 10));
  pirate.addImage(pirateimg);
  pirate.scale=0.06;
  pirate.velocityY = 3;
  pirate.lifetime = 150;
  pshipG.add(pirate);
  }
}