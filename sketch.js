var r1,r2,r3,r4,r5;
var b1;

var s1;
var s2;
var s3;
var s4;
var s5;

var sImg

function preload(){
  sImg = loadImage("ball.png")
}

function setup() {
  createCanvas(400,400);
 r1 = createSprite(200,200,2,250); 
 r2 = createSprite(150,200,2,250); 
 r3 = createSprite(250,200,2,250); 
 r4 = createSprite(100,200,2,250); 
 r5 = createSprite(300,200,2,250); 
  
 s1 = createSprite(200,350,2,250); 
 s1.addImage(sImg);
 s1.scale = 0.05;
  
 s2 = createSprite(150,350,2,250); 
 s2.addImage(sImg);
 s2.scale = 0.05;
  
 s3 = createSprite(250,350,2,250); 
 s3.addImage(sImg);
 s3.scale = 0.05;
  
 s4 = createSprite(100,350,2,250); 
 s4.addImage(sImg);
 s4.scale = 0.05;
  
 s5 = createSprite(300,350,2,250); 
 s5.addImage(sImg);
 s5.scale = 0.05;
  
 b1 = createSprite(200,80,400,20); 

 s4.velocityX = 20;
 s5.velocityX = -20
  
  
}

function draw() {  
  //fill the computer screen with white color
  background("white");
  edges = createEdgeSprites();
  
  r4.x = s4.x;
  r5.x = s5.x;
  
  s4.bounceOff(edges);
  s5.bounceOff(edges);
  
  s4.bounceOff(s2);
  s5.bounceOff(s3);
  
  

  drawSprites();
}
