const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var ground1,ground2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

var ball,rope;

var score;

function setup(){
    createCanvas(600,400);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(300,350,600,10);
    ground2 = new Ground(440,250,200,10);

    box1 = new Box(370,220,50,50);
    box2 = new Box(420,220,50,50);
    box3 = new Box(470,220,50,50);
    box4 = new Box(520,220,50,50);
    box5 = new Box(395,170,50,50);
    box6 = new Box(445,170,50,50);
    box7 = new Box(495,170,50,50);
    box8 = new Box(420,120,50,50);
    box9 = new Box(470,120,50,50);
    box10 = new Box(445,70,50,50);

    ball = new Polygon(60,300,30);

    rope = new Chain(ball.body,{x:60,y:140});
}

function draw(){
    background(51);
    text("Score:"+score,500,50);

    Engine.update(engine);

    ground1.display();
    ground2.display();

    box1.display();
    box1.score();

    box2.display();
    box2.score();

    box3.display();
    box3.score();

    box4.display();
    box4.score();

    box5.display();
    box5.score();

    box6.display();
    box6.score();

    box7.display();
    box7.score();

    box8.display();
    box8.score();

    box9.display();
    box9.score();

    box10.display();
    box10.score();

    ball.display();

    rope.display();

    text(mouseX+","+mouseY,mouseX,mouseY);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(ball.body);
    }
}