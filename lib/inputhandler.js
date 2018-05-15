class InputHandler {
  constructor() {

  }

  checkInput(){
    window.addEventListener('keydown',(e)=>{
      switch (e.keyCode) {
        case 37: case 65:
          //left arrow
        return "left";
        case 39: case 68:
          //right arrow
        return "right";
        case 38: case 87:
          //up arrow
        return "up";
        case 40: case 83:
          //down arrow
        return "down";
        case 32:
          //spacebar
        return "space";
      }
    });
  }
}
