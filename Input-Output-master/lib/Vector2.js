class Vector2 {
  constructor(dx,dy,label) {
    this._dx=dx;
    this._dy=dy;
    this._r = Math.sqrt(this._dx*this._dx + this._dy*this._dy);
    this._angle = Math.atan2(this._dy,this._dx);
    this.label = label || "";
  }

  get dx(){
    return this._dx;
  }

  get dy(){
    return this._dy;
  }


  set dx(newDx){
    this._dx = newDx;
    this._r = Math.sqrt(this._dx*this._dx + this._dy*this._dy);
    this._angle = Math.atan2(this._dy,this._dx);
  }

  set dy(newDy){
    this._dy = newDy;
    this._r = Math.sqrt(this._dx*this._dx + this._dy*this._dy);
    this._angle = Math.atan2(this._dy,this._dx);
  }

  get r(){
    return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
  }

  set r(newR){
    if(newR <0){
      this.angle -= Math.PI;
    }
    this._r = Math.abs(newR);
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);

  }

  get angle(){
    return Math.atan2(this.dy,this.dx);
  }

  set angle(newAngle){
    this._angle = newAngle;
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);
  }

  draw(context,x,y,scale){
    context.fillStyle = "white"
    let h = 4;
    let ah = 10;
    let aw = 20;
    context.save();
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "4";
    context.translate(x,y);
    context.rotate(this.angle)
    context.moveTo(0,0);
    context.lineTo(0,h);
    context.lineTo(this._r*scale-aw,h);
    context.lineTo(this._r*scale-aw,ah);
    context.lineTo(this._r*scale,0);
    context.lineTo(this._r*scale-aw,-ah);
    context.lineTo(this._r*scale-aw,-h);
    context.lineTo(0,-h);
    context.closePath();
    context.stroke();
    context.fill();
    //draw label
    context.font="30px Arial";
    context.strokeText(this.label,this.r*scale*0.5,-2*h);
    context.fillText(this.label,this.r*scale*0.5,-2*h);
    context.restore();
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  scalairProduct(num){
    this.dx = this.dx * num;
    this.dy = this.dy * num;
  }

  sumVector(a,b){
    this.dx = a.dx + b.dx;
    this.dy = a.dy + b.dy;
  }

  difVector(a,b){
    this.dx = b.dx - a.dx;
    this.dy = b.dy - a.dy;
  }

  dot(b){
    return this.dx * b.dx + this.dy * b.dy;
  }
}
