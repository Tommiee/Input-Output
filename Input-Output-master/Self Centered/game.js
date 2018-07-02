//TODO get DataReader.js to gather Meditation info

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const username = document.getElementById('username');
const startButton = document.getElementById("StartButton");

let canvasW, canvasH;
resize();

let targetVector = new Vector2(0,0);
let rotator = new Vector2(0,0);
  rotator.r = canvasH/5;

let session = {};
let within,RunGame = false;
let points = 0;
let timeTreshold = new Date().getMilliseconds();
let initVal = getVal();
let spread = 10;

var player = new GameObject(
  new Point(0,0,20,"#9F9FFF","",false,0,"rgba(0,0,0,0)"),
  new Vector2(canvasW/4,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

var targetCircle = new GameObject(
  new Point(-200,-200,canvasH/8,"green","",true,5,"white","black","",700,canvasH/6+15),
  new Vector2(canvasW/2,canvasH/2),
  new Vector2(0,0),
  new Vector2(0,0)
);

startButton.onclick = function(){
  timeTreshold = new Date().getMilliseconds();
  sessionInit();
  startGame = true;
  loop();
  startButton.onclick = function(){};
  initVal = getVal();
};

function loop(){
  if(startGame){
    requestAnimationFrame(loop);
  }
  console.log(getVal());
  if(onInside(player,targetCircle)){
    if(!within){
      requestAnimationFrame(loop);
      console.log("started session");
      timeTreshold = new Date().getMilliseconds();
      session = sessionInit(username.value);
      within = true;
    }
    if(Math.round((new Date().getMilliseconds() - timeTreshold) % 80 == 0)){
      console.log("counted");
       points++;
     }
    console.log("inside");
    targetCircle.point.label = "NaN";
  }else{
    if(within){
      session.score = points;

      overWriteRecord(GetRecordJson(),session.score,session.tag);
      within = false;
      // initStartButton();
      console.log("on exit");
    }
    console.log("not inside");
  }

  targetCircle.point.label = "" +points;
  context.fillStyle = "rgba(0,0,0,0.01)";
  context.fillRect(0,0,canvasW,canvasH);
  context.globalCompositeOperation = "destination-out";
  player.draw();
  rotateAround(player,targetCircle);
  context.globalCompositeOperation = "source-over";
  context.fillStyle = "rgb(223, 223, 223)";
  context.fillRect(targetCircle.point.x - targetCircle.point.textXOffset - 3,targetCircle.point.y - targetCircle.point.textYOffset+8,
                   targetCircle.point.label.length*25,-40);
  targetCircle.draw();
  player.update();
  targetCircle.update();

  console.log("json value: " + getVal() + " " + "init val: " + initVal + " " + "spread: " + spread);
  if(getVal() >= initVal + spread ){
    rotator.r -= 0.5;
  } else {
    if(rotator.r < canvasH/2.5){
      rotator.r += 0.5;
    }
  }

  if(window.innerWidth != canvasW || window.innerHeight != canvasH){
    resize();
    targetCircle.pos.dx = canvasW/2;
    targetCircle.pos.dy = canvasH/2;
    targetCircle.point.r = canvasH/8;
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
  if(itself.point.distance(target.point) <= itself.point.r+target.point.r){
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

function initStartButton(){
  startButton.onclick = function(){
    sessionInit();
    startGame = !startGame;
    loop();
    startButton.onclick = function(){};
  };
}

function getVal(){
  if(getJson() != null){
    var initJsonVal = getJson();
    return initJsonVal.eSense.meditation;
  } else {
    return null;
  }
}
