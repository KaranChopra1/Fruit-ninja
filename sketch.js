//making game states
var PLAY=1;
var position
var END = 0;
var gameState=1;
var swordImage
var sword
var monsterImage
var enemyGroup, fruitGroup
var score
var monster
var gameOver
var gameoverimg
var knifeSwooshSound
var gameOverSound
function preload(){
  swordImage=loadImage("sword.png")
  fruit1 = loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
 monsterImage=loadImage("alien1.png");
  gameoverimg=loadImage("gameover.png");
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  gameOverSound=loadSound("gameover.mp3");
}
function setup(){
  createCanvas(600,600);
  
  //create sword
 sword = createSprite(40,200,20,20)
sword.addImage(swordImage);
sword.scale=0.7;
score=0;

fruitGroup= createGroup();
enemyGroup= createGroup();
  
}
function draw(){
  background("lightgreen");

 if(gameState === PLAY){
   fruits();
   Enemy();
 sword.y=World.mouseY
  sword.x=World.mouseX
   
  if(fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
   knifeSwooshSound.play();
     score=score+2;
  }
   
   else{
     
   
    if(enemyGroup.isTouching(sword)){
     gameState=END;
      gameOverSound.play();
         fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
      sword.addImage(gameoverimg);
      sword.x=200;
      sword.y=200;
    }
     
    }
   
}
  text("score : "+score,300,30);
  
 // if(gameState===END){
   
 // }
  
  
  
 

drawSprites();
}

function Enemy(){
  if(World.frameCount%160===0){
    monster=createSprite(450,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-(8+(score/10));
    monster.setLifetime=30;
    
    enemyGroup.add(monster);
  }
}

function fruits(){
  if(World.frameCount%80===0){
    position=Math.round(random(1,2));
    fruit=createSprite(500,200,20,20);
    fruit.scale=0.2;
    //fruit.debug=true;
    r=Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(fruit1);
    } else if (r == 2){
      fruit.addImage(fruit2);
    } else if (r == 3){
      fruit.addImage(fruit3);
    } else {
fruit.addImage(fruit4);
      
    }
      
  fruit.y=Math.round(random(50,340));
  
  fruit.velocityX=-7;
  fruit.setLifetime=100;
  
  fruitGroup.add(fruit);
    
    if(position===1)
   {
     fruit.x=400;
     fruit.velocityX=-(7+(score/4));
   }
   else 
  {
    if(position==2){
      fruit.x=0;
      
      fruit.velocityX=(7+(score/4));
    }
  }
              
}
}