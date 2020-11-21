class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            density:1.0,
            restitution:1.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r);
        pop();
    }
}