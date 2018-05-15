class Point {
  constructor(x,y,r,color,label) {
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "#ffff00";
    this.label = label || "";
  }

  distance(B){
    let dx = B.x - this.x;
    let dy = B.y - this.y;
    return Math.sqrt(dx*dx + dy * dy);
  }

  draw(){
    context.beginPath();
    context.fillStyle= this.color;
    context.strokeStyle = "black";
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    //context.fillStyle="yellow";
    context.font="30px Arial";
    context.strokeText(this.label,this.x-10,this.y-25);
    context.fillText(this.label,this.x-10,this.y-25);

  }
  drag(){
    let drag = false;
    let xMouse,yMouse,dx,dy,distance;

    canvas.addEventListener('mousedown',(evt)=>{
      let rect = canvas.getBoundingClientRect();
      xMouse= evt.clientX - rect.left;
      yMouse = evt.clientY - rect.top;
      dx = xMouse - this.x;
      dy = yMouse - this.y;
      distance = Math.sqrt(dx*dx + dy*dy);
      if(distance<=this.r){
        drag = true;
      } else{
        drag = false;
      }
    })

    canvas.addEventListener('mousemove',(evt)=>{
      if(drag){
        let rect = canvas.getBoundingClientRect();
        xMouse= evt.clientX - rect.left;
        yMouse = evt.clientY - rect.top;
        dx = xMouse - this.x;
        dy = yMouse - this.y;
        this.x = xMouse;
        this.y = yMouse;
      }

    });

    canvas.addEventListener('mouseup',(evt)=>{
        drag = false;
    });

  }
}
