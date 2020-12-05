class Paper {
  constructor(x, y, radius) {
    var options = {
         isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.x=x;
    this.y=y;
    this.radius= radius;
    this.body = Bodies.circle(x, y, radius/3.3,options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
  //  var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
   // rotate(angle);
  //  ellipseMode(CENTER);
    
    fill(255);
  //  ellipse(0, 0, this.radius,this.radius);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
  }
};