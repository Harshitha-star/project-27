class Slingshot{
    constructor(body1, body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
           PointB:{x:this.offsetX,y: this.offsetY}
        }
        this.body2 = body2;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
        push();
        if(this.sling.body1){
         var pointA = this.sling.body1.position; 
         var PointB = this.sling.body2.position; 
        var Anchor1X = pointA.y;
        var Anchor1Y = pointB.y;
        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY; 

         strokeWeight(4); 
         line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y); 
         pop();
        } 
    }

        
    }
    


 