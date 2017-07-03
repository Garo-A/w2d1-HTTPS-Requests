var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg') //GETS the information, puts into stream.
  .on('error', function (err) { //This handles erros
    throw err;
  })

  .on('response', function (response) { //STREAM COMMAND - Reading response things
    console.log("Response code: ", response.statusCode);
    console.log("Response message: ", response.statusMessage);
    console.log("Resonse type: ", response.headers['content-type']);
  })

  .on('body', function (body){
    console.log("Download Start");
  })

  .on('end', function() { //Once done, issues end message.
    console.log("Download complete");
  })

  .pipe(fs.createWriteStream('./future.jpg')); //use JS FS to pipe whatever I read into a new stream that would essentially pipe into new file


