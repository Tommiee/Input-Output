class GameObject {

  constructor(point,pos,vel,acc) {
    /**
    @param point Point
    @param pos Vector2
    @param vel Vector2
    @param acc Vector2
    */
    this.point = point;
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
  }

  update(){
    if(this.pos.dx > canvas.width-this.point.r){
      this.vel.dx = - Math.abs(this.vel.dx);
    }
    if(this.pos.dy > canvas.height-this.point.r){
      this.vel.dy = - Math.abs(this.vel.dy);
    }
    if(this.pos.dx<this.point.r ){
      this.vel.dx = Math.abs(this.vel.dx);
    }
    if(this.pos.dy<this.point.r ){
      this.vel.dy = Math.abs(this.vel.dy);
    }
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.point.x = this.pos.dx;
    this.point.y = this.pos.dy;
  }

  draw(){
    this.point.draw();
  }
}
