var neurosky = require('node-neurosky');

var client = neurosky.createClient({
  appName: 'My Great Application',
	appKey: '1234567890abcdef...'
})

client.on('data',function(data){
	console.log(data);
});

client.connect()


/*
const canvas = document.getElementById('canvas');
const context = canvas .getContext('2d');

let inputHandler = new InputHandler();

let input = inputHandler.checkInput();
switch (input) {
  case "left":
    console.log("left pressed");
    break;
  case "right":
    console.log("right pressed");
    break;
  case "down":
    console.log("down pressed");
    break;
  case "up":
    console.log("up pressed");
    break;
}
*/
