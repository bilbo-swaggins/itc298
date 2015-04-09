//Renode File System https://nodejs.org/api/fs.html

var files = require("./files");

var whenRead = function(err, data) {
  if(err) {
    console.log("Couldn't read file");
    return;
  }
  console.log("File contains:", data);
}

files.read("sample.txt", whenRead);


var request = require("request");

var url = "https://www.npmjs.com/package/request";

request(url, function(err, response, body) {
  console.log("Body length is", body.length);
});
