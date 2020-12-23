
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, bob1, bob2, bob3, bob4, bob5, bobD, bobX, bobY, roof1, rope1, rope2, rope3, rope4, rope5
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roof1 = new roof(800, 175, 800, 20)
	bobD = 40
	bobX = 800
	bobY = 675
	bob3 = new bob(bobX, bobY, bobD)
	rope3 = new rope(bob3.body, roof1.body, 0, 0)
	bob1 = new bob(bobX-bobD*2, bobY, bobD)
	bob2 = new bob(bobX-bobD, bobY, bobD)
	bob4 = new bob(bobX+bobD, bobY, bobD)
	bob5 = new bob(bobX+bobD*2, bobY, bobD)
	rope1 = new rope(bob1.body, roof1.body, -bobD*2, 0)
	rope2 = new rope(bob2.body, roof1.body, -bobD, 0)
	rope4 = new rope(bob4.body, roof1.body, bobD, 0)
	rope5 = new rope(bob5.body, roof1.body, bobD*2, 0)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display()
  bob3.display()
  rope3.display()
  bob1.display()
  bob2.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45})
	}
}
