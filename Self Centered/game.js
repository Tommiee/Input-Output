const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let canvasW, canvasH;
resize();

var inputHandler = new InputHandler();

var player = new GameObject(
  new Point(canvasW/2,canvasH/2,20,"lightgreen"),
  new Vector2(canvasW/2,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

var targetCircle = new Point(canvasW/2,canvasH/2,200,"green","",true,5);

if(inputHandler.checkInput() == "space") {
    console.log("space pressed");
    player.vel.add(2,2);
}

function loop(){
  requestAnimationFrame(loop);
  if(window.innerWidth != canvasW || window.innerHeight != canvasH){
    resize();
    targetCircle.x = canvasW/2;
    targetCircle.y = canvasH/2;
  }
  context.clearRect(0,0,canvasW,canvasH);
  targetCircle.draw();
  player.draw();
  player.update();
}

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasW = canvas.width;
  canvasH = canvas.height;
}

loop();
