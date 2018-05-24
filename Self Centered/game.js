//TODO get DataReader.js to gather Meditation info

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let canvasW, canvasH;
resize();

let initJsonVal;

let targetVector = new Vector2(0,0);
let rotator = new Vector2(0,0);

var withinArea;

var player = new GameObject(
  new Point(0,0,20,"lightgreen"),
  new Vector2(canvasW/4,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

var targetCircle = new GameObject(
  new Point(-200,-200,canvasH/6,"green","",true,5,"white"),
  new Vector2(canvasW/2,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

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

  if(getJson() != null){
    initJsonVal = getJson();
    console.log(initJsonVal.eSense.meditation)
  }

  context.clearRect(player.point.x,player.point.y,(player.point.r*2)/0.5,(player.point.r*2)/0.5);
  context.fillStyle = "rgba(0,0,0,0.01)";
  context.fillRect(0,0,canvasW,canvasH);
  rotateAround(player,targetCircle);
  //player.draw();
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
  rotator.r = canvasH/4;

  self.pos.dx = temp.dx;
  self.pos.dy = temp.dy;
}

loop();
