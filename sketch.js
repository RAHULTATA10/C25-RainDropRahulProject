//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var raindrops = [];
var i = 0;


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

engine = Engine.create();
world = engine.world;


frameRate(15);

for(var i = 0; i <= width; i = i + 20) {
  raindrop = new Raindrop(i,random(-500,300),random(0.5,4));
  raindrops.push(raindrop);
  World.add(world,raindrops);
}
   
 
}

function draw() {
  background(0,100);  

  Engine.update(engine);

 
    for(var i = 0; i < raindrops.length; i++) {
  
      raindrops[i].display();
       
    } 
  
  
}