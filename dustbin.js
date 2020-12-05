class Dustbin{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=200;
         this.height=200;
        this.thickness=10; 
        this.image=loadImage("dustbingreen.png"); 
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options); 
        this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.height,this.thickness,options); 
        Matter.Body.setAngle(this.leftBody,this.angle); 
        this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options); 
        Matter.Body.setAngle(this.rightBody,-1*this.angle); 
        World.add(world,this.bottomBody); 
        World.add(world,this.leftBody); 
        World.add(world,this.rightBody);

    }
        display(){
            var posB = this.bottomBody.position;
            var posL = this.leftBody.position;
            var posR = this.rightBody.position;
            push();
            translate(posL.x,posL.y);
            rotate(this.angle);
            angleMode(RADIANS);
            rectMode(CENTER);
            fill("blue");
            rect(0,0,this.thickness,this.height);
            pop();

            push();
            translate(posR.x,posR.y);
            rotate(-1*this.angle);
            angleMode(RADIANS);
            rectMode(CENTER);
            fill("blue");
            rect(0,0,this.thickness,this.height);
            pop();

            push();
            translate(posB.x,posB.y);
            angleMode(RADIANS);
            rectMode(CENTER);
            fill("blue");
           //rect(0,0,180,20);
            imageMode(CENTER);
            image(this.image,0,-this.height/2,this.width,this.height)
            pop();
        }
    
};