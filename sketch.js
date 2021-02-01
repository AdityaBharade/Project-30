const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon1
var box1;
var box2;
var box3;
var box4;
var box5;
var box6
var box7
var box8
var box9
var box10
var box11,box12,box13,box14,box15,
    box16,box17,box18,box19,box20,
    box21,box22,box23,box24,box25;
var slingshot ;
var ground1 ,ground2 ,ground3;


function preload() {
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground1  = new Ground (650,500,1300,10);
    ground2  = new Ground (650,380,300,10);
    ground3  = new Ground (1000,280,200,10);
    polygon1 = new Polygon(100,250,25);
    box1     = new Box    (650,370,30,40); 
    box2     = new Box    (620,370,30,40);
    box3     = new Box    (590,370,30,40);
    box4     = new Box    (680,370,30,40);
    box5     = new Box    (710,370,30,40);
    box6     = new Box    (740,370,30,40);
    box7     = new Box    (650,330,30,40);
    box8     = new Box    (620,330,30,40);
    box9     = new Box    (710,330,30,40);
    box10    = new Box    (680,330,30,40);
    box11    = new Box    (680,290,30,40);
    box12    = new Box    (650,290,30,40);
    box13    = new Box    (620,290,30,40);
    box14    = new Box    (650,260,30,40);
    box15    = new Box    (560,370,30,40);
    box16    = new Box    (590,330,30,40);
    box17    = new Box   (1000,270,30,40);
    box18    = new Box    (970,270,30,40); 
    box19    = new Box    (940,270,30,40);
    box20    = new Box   (1030,270,30,40);
    box21    = new Box   (1060,270,30,40);
    box22    = new Box   (1000,230,30,40);
    box23    = new Box    (970,230,30,40);
    box24    = new Box   (1030,230,30,40);
    box25    = new Box    (1000,190,30,40);
    
    slingshot = new Slingshot(polygon1.body,{x:100,y:250});


    
    console.log(box2);
    
}

function draw(){
    background("GREEN");
    Engine.update(engine);

    textSize(40);
    text("Press Space To Play 1 More Chance!",50,50);
    
    ground1.display();
    ground2.display();
    ground3.display();
    polygon1.display();
    box1.display(); 
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    slingshot.display();

}

function mouseDragged(){

Matter.Body.setPosition(polygon1.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){

    slingshot.fly()

}
function keyPressed(){
if(keyCode===32){
    Matter.Body.setPosition(polygon1.body,{x:100,y:250})
    slingshot.attach(polygon1.body)
    
    }
}
      function attach(){
    
    var bodyA = body;
    
      }
    