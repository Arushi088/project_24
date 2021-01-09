
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj;
var ground1;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paperObj = new Paper(60, 628, 30);

	ground1 = new Ground(400, 630, width, 15);

	box1 = new Box(550, 560, 10, 120)
	box2 = new Box(625, 625 , 150, 10)
	box3 = new Box(700, 560, 10, 120)

	}


function draw() {
  rectMode(CENTER);
  background(0);

paperObj.display();

ground1.display();

box1.display();
box2.display();
box3.display();

keyPressed();

}

function keyPressed(){
	if (keyCode === UP_ARROW ){

Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 85, y: -85 })

   }
}