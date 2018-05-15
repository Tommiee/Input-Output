var neurosky = require('node-neurosky');
var fs = require("fs");

var client = neurosky.createClient({
  appName: 'Neuro-Cade Server-side',
	appKey: '1234567890abcdef...'
})

client.on('data',function(data){
  fs.writeFile("./data/data.json", data, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("Data written to file");
    //Might want to remove this later, else it spams the shit outta your console.
  });
});

client.connect()
