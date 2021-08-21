const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground1,right,left,top1;
var B1,B2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  B1=createImg("push.png");
  B1.position(220,30);
  B1.size(50,50);
  B1.mouseClicked(hForce)

  B2=createImg("push.png");
  B2.position(20,30);
  B2.size(50,50);
  B2.mouseClicked(vForce)
  
  ground1=new ground(200,390,400,20);
  right=new ground(390,200,20,400);
  left=new ground(10,200,20,400);
  top1=new ground(200,10,400,20);

  var ball_option={
    restitution:1
  }

  ball=Bodies.circle(200,100,20,ball_option)
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20)
  ground1.display();
  right.display();
  left.display();
  top1.display();
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}