const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const username = document.getElementById('username');
const startButton = document.getElementById("StartButton");

let canvasW, canvasH;
resize();

let initVal = getVal();
let spread = 10;
let session = {};

var player = new GameObject(
  new Point(0,0,50,"#FFFFFF",""),
  new Vector2(canvasW/2,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

function loop(){
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvasW,canvasH);
  if(window.innerWidth != canvasW || window.innerHeight != canvasH){
    resize();
  }

  //unnecessarily long debug line
  console.log("current value: " + getVal() + " start value: " + initVal + " top-target: " + (initVal + spread) + " bottom-target: " + (initVal - spread));
  if(getVal() >= initVal + spread){
    if(player.pos.dy > canvasH/4){
      player.pos.dy -= 0.5;
      // console.log("goin up");
    }
  } else if (getVal() <= initVal - spread) {
    if(player.pos.dy < 3*canvasH/4){
      player.pos.dy += 0.5;
      // console.log("goin down");
    }
  }
  player.point.label = getVal();
  player.draw();
  player.update();
}


//TODO: move below this to lib

startButton.onclick = function(){
  timeTreshold = new Date().getMilliseconds();
  sessionInit();
  loop();
  spawning();
  initVal = getVal();
  startButton.onclick = function(){};
};

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

function getVal(){
  if(getJson() != null){
    var initJsonVal = getJson();
    return initJsonVal.eSense.attention;
  } else {
    return null;
  }
}
