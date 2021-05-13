const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygonImg;
var backgroundImg;

function preload(){
  getBackgroundImage();

}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);

  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);

  block21 = new Block(385,115,30,40);


  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);

  blocks9 = new Block(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);


  slingShot = new SlingShot(this.polygon,{x:200,y:200});



}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine);
 
  
 ground.display();
  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("brown")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("pink")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("purple")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("blue")
  block19.display();
  block20.display();
 stroke(15)
 fill("green")
  block21.display();

  stroke(15)
  fill("yellow")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("red")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill("orange")
  blocks9.display();
  ellipse(polygon.position.x,polygon.position.y,20);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}
  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
  

  if(hour >= 06 && hour<=18){
    bg = "dark.jpg";
  } else{
    bg = "light.jpg";
  }
  backgroundImg = loadImage(bg) 
}

