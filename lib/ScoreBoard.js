let recordPath = '../data/record.json';
let jsonWriter = '../backend/writeJson.php';

function GetResponse(callback){
  let http = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', recordPath, true);
  xobj.onreadystatechange = function(){
    if (xobj.readyState == 4 && xobj.status == "200"){
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function GetJsonObj(){
  GetResponse(function(response){
    return JSON.parse(response);
  });
}

function WriteJsonObj(obj,path){
  let http = new XMLHttpRequest();
  if(typeof obj == "object"){
    let httpString = jsonWriter + "?put=" + JSON.stringify(obj) + "&path=" + path;
  }else if(typeof obj == "string"){
    let httpString = jsonWriter + "?put=" + obj + "&path=" + path;
  }
  console.log(obj);
  http.open("GET", httpString, true);
  http.send();
  http.onreadystatechange = function() {}
}
