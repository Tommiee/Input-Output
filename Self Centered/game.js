//TODO get DataReader.js to gather Meditation info

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const username = document.getElementById('username');
const startButton = document.getElementById("StartButton");


let canvasW, canvasH;
resize();

let initJsonVal;

let targetVector = new Vector2(0,0);
let rotator = new Vector2(0,0);
  rotator.r = canvasH/5;

let session = {};
let within;
let points = 0;
let timeTreshold = new Date().getMilliseconds();

var player = new GameObject(
  new Point(0,0,20,"#9F9FFF","",false,0,"rgba(0,0,0,0)"),
  new Vector2(canvasW/4,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

var targetCircle = new GameObject(
  new Point(-200,-200,canvasH/6,"green","",true,5,"white","black","",700,canvasH/6+15),
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

/*
    //spacebar placeholder "meditation above threshold"
    if(!onInside(player,targetCircle)){
      player.vel.difVector(player.pos,new Vector2(targetCircle.x,targetCircle.y));
      player.vel.r = 1;
    } else {
      player.vel = new Vector2(0,0);
    }
    //placeholder "meditation below threshold"
    player.vel.r = -1;
*/


function loop(){
  requestAnimationFrame(loop);
  console.log(getVal());
  if(onInside(player,targetCircle)){
    if(!within)
    {
      within = true;
      console.log("startedGame");
      timeTreshold = new Date().getMilliseconds();
      session = sessionInit(username.value);
    }
    session.score++;
    targetCircle.point.label = "UmU";
  }else{
    if(within){
      within = false;
      startButton.onclick = function(){
        sessionInit();
        loop();
        startButton.onclick = function(){};
      };
      console.log("on exit");
    }
    // cancelAnimationFrame(loop);
    if(Math.round((new Date().getMilliseconds() - timeTreshold) % 80 == 0)){
      points++;
    }

    targetCircle.point.label = points;
  }

//  context.clearRect(player.point.x,player.point.y,(player.point.r*2)/0.5,(player.point.r*2)/0.5);
  context.fillStyle = "rgba(0,0,0,0.01)";
  context.fillRect(0,0,canvasW,canvasH);
  context.globalCompositeOperation = "destination-out";
  player.draw();
  rotateAround(player,targetCircle);
  context.globalCompositeOperation = "source-over";
  context.fillStyle = "rgb(223, 223, 223)";
  context.fillRect(targetCircle.point.x - targetCircle.point.textXOffset - 15,targetCircle.point.y - targetCircle.point.textYOffset+8,
                   targetCircle.point.label.length*25,-40);
  targetCircle.draw();
  player.update();
  targetCircle.update();

  rotator.r--;

  if(window.innerWidth != canvasW || window.innerHeight != canvasH){
    resize();
    targetCircle.pos.dx = canvasW/2;
    targetCircle.pos.dy = canvasH/2;
    targetCircle.point.r = canvasH/6;
    context.clearRect(0,0,canvasW,canvasH);
  }
}

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasW = canvas.width;
  canvasH = canvas.height;
}

function onInside(itself,target){
  if(itself.point.distance(target) <= itself.point.r+target.point.r){
    return true;
  }else return false;
}

function rotateAround(self,target){
  let dAngle = 0.005;
  let temp = new Vector2(0,0);

  targetVector.dx = target.pos.dx;
  targetVector.dy = target.pos.dy;

  temp.sumVector(targetVector,rotator);

  rotator.angle += dAngle;

  self.pos.dx = temp.dx;
  self.pos.dy = temp.dy;
}

function getVal(){
  if(getJson() != null){
    initJsonVal = getJson();
    return initJsonVal.eSense.meditation;
  }
}
