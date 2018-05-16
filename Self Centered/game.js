const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let canvasW, canvasH;
resize();

//var inputHandler = new InputHandler();

var player = new GameObject(
  new Point(0,0,20,"lightgreen"),
  new Vector2(100,100),
  new Vector2(1,-3),
  new Vector2(0,0)
);

var targetCircle = new Point(canvasW/2,canvasH/2,100,"green","",true,5);

window.addEventListener('keydown',(e)=>{
  switch (e.keyCode) {
    case 32:
      //spacebar
      if(player.point.distance(targetCircle) >= player.point.r){
        player.vel.difVector(player.pos,new Vector2(targetCircle.x,targetCircle.y));
        player.vel.r = 1;
      } else {
        player.vel = new Vector2(0,0)
      }
    break;
  }
});

function loop(){
  requestAnimationFrame(loop);
  if(window.innerWidth != canvasW || window.innerHeight != canvasH){
    resize();
    targetCircle.x = canvasW/2;
    targetCircle.y = canvasH/2;
  }
  context.clearRect(0,0,canvasW,canvasH);
  player.draw();
  targetCircle.draw();
  player.update();
}

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasW = canvas.width;
  canvasH = canvas.height;
}

loop();
