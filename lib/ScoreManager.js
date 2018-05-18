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

class ScoreManager{
  constructor(records, usertag, points){
    this._records = records;
    this._tag = usertag;
    this._points = points;
    this._session = {};
  }


  count(b){
    this.baseScore += b;
  }

  reset(){
    this.points = 0;
  }

  overWriteRecord(){
    let overWrited = false;
    for(let i = 0;i < this.records.records.length;i++){
      if(this.records.records[i].tag){
        this.records.records[i].score = this.points;
        overWrited = true;
        break;
      }
    }
    if(!overWrited){
      this.records.records.push(this.session);
    }
  }

  set points(inp){
    this._points;
  }

  get session(){
    let record = {};
    record.points = this._points;
    record.tag = this._tag;
    return record;
  }

  set session(inp){
    this._session;
  }
}
