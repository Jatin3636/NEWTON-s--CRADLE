const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
    canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    };
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    bob1 = new Bob(400,100,"red");
    rope1 = new Rope(bob1.body,{x:400,y:50});
    bob2 = new Bob(450,100,255);
    rope2 = new Rope(bob2.body,{x:450,y:50});
    bob3 = new Bob(500,100,255);
    rope3 = new Rope(bob3.body,{x:500,y:50});
    bob4 = new Bob(550,100,255);
    rope4 = new Rope(bob4.body,{x:550,y:50});
    bob5 = new Bob(600,100,255);
    rope5 = new Rope(bob5.body,{x:600,y:50});

}

function draw() {

    background(144,101,215);
    Engine.update(engine);

    bob1.display();
    rope1.display();
    bob2.display();
    rope2.display();
    bob3.display();
    rope3.display();
    bob4.display();
    rope4.display();
    bob5.display();
    rope5.display();

    textSize(22);
    stroke(255,0,0);
    strokeWeight(1.5);
    fill("yellow");
    text("press and drag mouse on the balls to control it",50,30);
    textSize(50);
    text("Newton’s Cradle",340,480);
}

//function mouseDragged() {
//    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
//}