class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }

       this.image = loadImage("sprites/paper.png");

    this.x = x;
    this.y = y;
    this.r = r;

    this.body = Bodies.circle(this.x,this.y,this.r/2,[options]);
    World.add(world,this.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      ellipse(this.x,this.y,this.r,this.r);
    }
  };