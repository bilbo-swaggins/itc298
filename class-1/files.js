//files.js

//require File System
var fs = require("fs");

//function that calls fs read file and wraps and always uses UTF 8
var read = function(filename, callback) {
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) return callback(err);
    data = data + "...";
    callback(null, data);
  });
};

console.log("Hello From the files.js module");

//Module.exports shares with other modules
module.exports = {

  read: read

};
