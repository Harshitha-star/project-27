
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new paper(200,400,25);
	bob2 = new paper(250,400,25);
	bob3 = new paper(300,400,25);
	bob4 = new paper(350,400,25);
	bob5 = new paper(400,400,25);
	ground = new Ground(400,100,500,30);
	rope1 = new Slingshot(bob1,ground,2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  drawSprites();
 
}



