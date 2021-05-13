class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :1.0,
          
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=225;
        World.add(world, this.body);
      }
        display() {
          var pos = this.body.position;
          var angle = this.angle;
          push();
          if (this.body.speed < 3) {
              rectMode(CENTER);
              translate(pos.x, pos.y);
              rotate(angle);
              fill("brown");
              strokeWeight(4);
              rect(0, 0, this.width, this.height);
              pop();
          } else {
              push();
              World.remove(world, this.body);
              this.visibility = this.visibility - 1;
              tint(255, this.visibility);
              pop();
          }
      }
  }