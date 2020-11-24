class Box{
    constructor(x,y,width,length){
        var options = {
            isStatic:false,
        }
        this.body = Bodies.rectangle(x,y,width,length,options);
        this.visibility = 255;
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.w = width;
        this.l = length;
        World.add(world,this.body);
    }
    display(){

        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill(this.color);
            rectMode(CENTER);
            rect(0,0,this.w,this.l);
            pop();
        }
        else{
            World.remove(world,this.body);
            this.visibility-=5;
        }
    }
    score(){
        if(this.visibility>0 && this.visibility>-50){
            score = score+1;
        }
    }
}
