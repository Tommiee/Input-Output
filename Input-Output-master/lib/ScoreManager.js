let jsonWriter = '../backend/writeJson.php';
let record_JSON = null;

function GetJsonString(callback,path){
  let jsonPath = path || '../data/record.json';
  let http = new XMLHttpRequest();
  http.overrideMimeType("application/json");
  http.open('GET', jsonPath, true);
  http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(http.responseText);
        }
  };
  http.send(null);
}

function initRecord(loc) {
  let path = loc || '../data/record.json';
    GetJsonString(function(response) {
    // Parse JSON string into object
    console.log(response);
    record_JSON = JSON.parse(response);
  },path);
}

function GetRecordJson(destination){
  let loc = destination || '../data/record.json';
  initRecord(loc);
  return record_JSON;
}


function WriteJsonObj(obj,path){
  let http = new XMLHttpRequest();
  let httpString = jsonWriter + "?put=" + JSON.stringify(obj) + "&path=" + path;

  console.log(obj);
  http.open("GET", httpString, true);
  http.onreadystatechange = function()
  {
    http.send();
  }
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
    return records;
  }
