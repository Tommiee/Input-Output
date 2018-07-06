const Wtop = window.innerHeight/3;
const Wmid = 2*(window.innerHeight/3);
const Wbottom = 3*(window.innerHeight/3);

const Wpos = [Wtop,Wmid,Wbottom];

function spawning(){
  setInterval(function(){
    chooseRandom(Wpos);
    alert(Wpos);
  }, 1000);
}

function chooseRandom(array){
  let temp = Math.floor(Math.random() * array.Length+1);
  return array[temp];
}
