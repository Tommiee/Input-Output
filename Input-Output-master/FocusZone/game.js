const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const username = document.getElementById('username');
const startButton = document.getElementById("StartButton");

let canvasW, canvasH;
resize();

let session = {};

var player = new GameObject(
  new Point(0,0,20,"#FFFFFF",""),
  new Vector2(canvasW/2,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

startButton.onclick = function(){
  timeTreshold = new Date().getMilliseconds();
  sessionInit();
  loop();
  startButton.onclick = function(){};
};

function loop(){
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvasW,canvasH);
  player.draw();
  player.update();
  if(window.innerWidth != canvasW || window.innerHeight != canvasH){
    resize();
  }
}

function initStartButton(){
  startButton.onclick = function(){
    sessionInit();
    startGame = !startGame;
    loop();
    startButton.onclick = function(){};
  };
}

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasW = canvas.width;
  canvasH = canvas.height;
}
