
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1 , bobObject2, bobObject3, bobObject4, bobObject5 ;
var rope1, rope2, rope3, rope4, rope5;
var roofObject;

function preload()
{
	
}

function setup(){ 
createCanvas(600, 600);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObject = new Roof(270 , 50 , 400, 50);

	bobDiameter = 40;

    bobObject1 = new Bob(355 , 440 , 40 ,40);
	bobObject2 = new Bob(314 , 440 , 40 ,40);
    bobObject3 = new Bob(273 , 440 , 40 ,40);
	bobObject4 = new Bob(232 , 440 , 40 ,40);
	bobObject5 = new Bob(191 , 440 , 40 ,40);  

    
	rope1=new Rope(bobObject1.body,roofObject.body,bobDiameter*2, 0)
    rope2=new Rope(bobObject2.body,roofObject.body,bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
    rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  roofObject.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
  
 
 drawSprites();
 
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject5.body.position,{x:50,y:45});

  	}
}



