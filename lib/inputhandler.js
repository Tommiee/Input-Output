class InputHandler {
  constructor() {
  }

  checkInput(){
    var input = null;
    window.addEventListener('keydown',(e)=>{
      switch (e.keyCode) {
        case 37: case 65:
          //left arrow and 'S' key
          input = "left";
        break;
        case 39: case 68:
          //right arrow and 'D' key
          input = "right";
        break;
        case 38: case 87:
          //up arrow and 'W' key
          input = "up"
        break;
        case 40: case 83:
          //down arrow and 'S' key
          input = "down";
        break;
        case 32:
          //spacebar
          input = "space";
        break;
      }
    });
    if(input != null){
      console.log(input);
      return input;
    }
  }
}
