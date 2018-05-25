let jsonWriter = '../backend/writeJson.php';

function GetJson(path){
  let http = new XMLHttpRequest();
  http.overrideMimeType("application/json");
  http.onreadystatechange = function(){
    if (http.readyState == 4 && http.status == "200"){
      //console.log(http.responseText);

    }
    http.open('GET', path, true);
    http.send();
  };
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

function sessionInit(username)
{
  let session = {};
  session.tag = username;
  session.score = 0;
  return session;
}

function overWriteRecord(records,points,tag){
    let overWrited = false;
    for(let i = 0;i < records.records.length;i++){
      if(records.records[i].tag == tag){
        records.records[i].score = points;
        overWrited = true;
        break;
      }
    }
    if(!overWrited){
      let session = {};
      session.tag = tag;
      session.score = points;
      records.records.push(session);
    }
  }
