class Raindrop {

 constructor(x,y,radius) {
     
      var options ={
          restitution: 0.98,
          frictionAir: 0.04
      }
      this.raindrop = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     
      World.add(world,this.raindrop);

      
 }

 
 display() {
  
    var pos = this.raindrop.position;

    push();
    fill("blue");
    stroke(255);
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.radius);

    if(this.raindrop.position.y > height + 20) {
        console.log("Hello");
      Matter.Body.setPosition(this.raindrop,{x: pos.x,y : Math.random(-100,0)});
      
    }
    
    pop();

    push();
     fill("green");
     stroke(255)
      textSize(20);
      text( Math.random().toString(36).substring(7).slice(0,1),pos.x + 200  , pos.y);
 
    pop();
   

}



}