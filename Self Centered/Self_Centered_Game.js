const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function setUp(){
  var player = new GameObject(new Point(canvas.width/2,canvas.height/2,(canvas.height * canvas.width)/20,"lightblue")
                              ,new Vector2(canvas.width/2,canvas.height/2),new Vector2(0,0),new Vector2(0,0));
  var arena = {};
}

function loop(){
  requestAnimationFrame(loop);
}

setUp();
loop();
