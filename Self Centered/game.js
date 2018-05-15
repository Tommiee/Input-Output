const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let canvasW, canvasH;
resize();

var player = new GameObject(
  new Point(canvasW/2,canvasH/2,20,"lightgreen"),
  new Vector2(canvasW/2,canvasH/2),
  new Vector2(1,4),
  new Vector2(0,0)
);

var arena = {};

function loop(){
  requestAnimationFrame(loop);
  resize();
  context.clearRect(0,0,canvasW,canvasH);
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
