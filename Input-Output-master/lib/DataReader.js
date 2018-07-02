//TODO make this script return variables.
//TODO make this script not look like ass.
let actual_JSON = null;

function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', '../data/data.json', true);
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
}

function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    actual_JSON = JSON.parse(response);
    //console.log(actual_JSON);
    //return actual_JSON;
  });
  //console.log("jsonObject: " + jsonObject);
  //return jsonObject
}

function getJson(){
  init();
  return actual_JSON;
}

// setInterval(function(){
//   init();
//   console.log(actual_JSON);
// }, 1000);
