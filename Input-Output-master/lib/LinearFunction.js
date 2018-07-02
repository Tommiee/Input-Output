class LinearFunction {
  constructor(slope,yIntercept) {
    this.slope = slope;
    this.yIntercept = yIntercept;
  }

  letTwoPointsDefineLine(A,B){
    this.slope = (B.y-A.y)/(B.x-A.x);
    this.yIntercept= B.y - (B.x*this.slope);
  }

  letSlopeAndPointDefineLine(slope,A){
    this.slope = slope;
    this.yIntercept= A.y - (A.x*this.slope);
  }

  draw(x0,x1,color){
    context.beginPath();
    context.setLineWidth=1;
    context.strokeStyle = color || "black";
    context.moveTo(x0,this.calcY(x0));
    context.lineTo(x1,this.calcY(x1));
    context.stroke();
    context.closePath();
  }

  calcY(x){
    return x*this.slope + this.yIntercept;
  }

  intersection (m){
    var ans = {};
    ans.x = (m.yIntercept - this.yIntercept)/(this.slope-m.slope);
    ans.y = (ans.x * this.slope) + this.yIntercept;
    return ans;
  }

  throughPointAndPerpedicularToLine(A,l){
    this.slope = -1/l.slope;
    this.yIntercept = A.y - this.slope*A.x;
  }
}
