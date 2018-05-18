//TODO make this script return variables.
//TODO make this script not look like ass.

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
  var jsonObject = loadJSON(function(response) {
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    console.log("actual_JSON: " + actual_JSON);
    return actual_JSON;
  });
  console.log("jsonObject: " + jsonObject);
  return jsonObject
}

setInterval(function(){
  let data;
  if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable​
    data = callback(init);
    console.log(data);
  }
}, 1000);
