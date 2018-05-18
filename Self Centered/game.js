//TODO get DataReader.js to gather Meditation info
//TODO

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let canvasW, canvasH;
resize();

//var inputHandler = new InputHandler();
var withinArea;

var player = new GameObject(
  new Point(0,0,20,"lightgreen"),
  new Vector2(canvasW/2,canvasH/4),
  new Vector2(5,0),
  new Vector2(0,0)
);

var targetCircle = new Point(canvasW/2,canvasH/2,100,"green","",true,5);
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
  if(window.innerWidth != canvasW || window.innerHeight != canvasH){
    resize();
    targetCircle.x = canvasW/2;
    targetCircle.y = canvasH/2;
  }
  context.clearRect(0,0,canvasW,canvasH);
  rotateAround(player,targetCircle);
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

function onInside(itself,target){
  if(itself.point.distance(target) <= itself.point.r+target.r){
    return true;
  }else return false;
}

function rotateAround(self,target){
  self.vel.difVector(self.pos,new Vector2(target.x,target.y));
  self.vel.add(self.vel.difVector(self,new Vector2(target.x,-target.y)));
  self.vel.r = 1;
}

loop();
