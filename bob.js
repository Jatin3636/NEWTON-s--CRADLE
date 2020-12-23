class Bob {
    constructor(x,y,color) {
        var options = {
          'isStatic':false,
            'restitution':1.0,
            'friction':0.0,
            'frictionAir':0.0,
            'slop':1,
            'inertia':Infinity
        }
        this.body = Bodies.circle(x, y,25,options);
        this.color = color;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill(this.color);
        ellipse(0, 0, 50,50);
        pop();
      }
}