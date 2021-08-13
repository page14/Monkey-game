var monk,monk1,monk2,monk3,monk4,monk5,monk6,monk7,monk8
var monk9,monk10
var ban,banimg
var stone,stonep

var Stoneg
var Bang

var jung

var jungle

var inv

var score

function preload(){
 jung = loadImage("jungle.jpg");
  
   score = 0;
  
  monk1 = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
  
  banimg = loadImage("banana.png");
  
  stonep = loadImage("stone.png");
  
 

}

function setup() {
  createCanvas(400, 400);
  
  
  jungle = createSprite(20,20,200,200);
  
  
  Bang = new Group();  
  stoneg = new Group();
  
  jungle.scale = 2;
  
  jungle.addImage("jun",jung);
  
  jungle.velocityX = -2;
 
  
  
  
  monk = createSprite(40,375,400,20);
 
  monk.addAnimation ("run",monk1);
  monk.scale = 0.1;
  
  inv = createSprite(200,385,400,5);
  
  inv.visible = false;
  
 
  
  
   banana();
  obstacle();
}

function draw() {
  background(220);
  
  
  
  //monk.velocityY = monk.velocityY + 0.8;
  
   if(keyDown("space") && monk.y > 350) {
    monk.velocityY = -20;
  }
  
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  console.log(monk.y);
  
  if(Bang.isTouching(monk)){
  score = score + 2;
    Bang.destroyEach();
  
  }
  
  monk.velocityY = monk.velocityY + 0.8;
   monk.collide(inv);
  
  
  switch(score){
      
    case 10: monk.scale=0.12;
             break;
    case 20: monk.scale=0.14;
             break;
    case 30: monk.scale=0.16;
             break;
    case 40: monk.scale=0.18;
             break;
    default: break;          
  }
  
  if(stoneg.isTouching(monk)){
    monk.scale = 0.1;

  }
  drawSprites();
 stroke("white");
  textSize(20);
  fill("white");
  
  
  text("score " + score,300,30);
  

  
  
}
function banana() {
 
  if (frameCount % 60 === 0) {
    ban = createSprite(600,120,40,10);
    ban.Y = Math.round(random(100,250));
    ban.addImage(banimg);
    ban.scale = 0.08;
    ban.velocityX = -3;
    
     
    ban.lifetime = 200;
  
    ban.depth = monk.depth;
    ban.depth = monk.depth + 1;
    
    
    Bang.add(ban);
  }}




function obstacle() {
  if(frameCount % 60 === 0) {
    stone = createSprite(400,370,10,40);
    stone.velocityX = -4
    stone.addImage(stonep);
   
    
    stone.scale = 0.2;
    stone.lifetime = 155;
    
    stoneg.add(stone);
  }
}
