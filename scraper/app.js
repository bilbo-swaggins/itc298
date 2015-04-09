//Scrapper App

//Node_Modules
var request = require("request");
var cheerio = require("cheerio");

//URL
var url = "http://en.wikipedia.org/wiki/April_8";
//Get HTML
request(url, function (err, response, body) {
  //Error
  if (err) {
    console.log("Couldn't find page: " + err);
    return
  }

  //Cheerio Variable
  var $ = cheerio.load(body);
  //Get Death info
  var deaths = $("#Deaths").parent().next("ul").text();
  var numDeaths = $("#Deaths").parent().next("ul").children().length;
  //Get Birth info
  var births = $("#Births").parent().next("ul").text();
  var numBirths = $("#Births").parent().next("ul").children().length;

  //Print to Console
  console.log("Number of Deaths today:" + numDeaths );
  console.log("Number of Births today:" + numBirths );
  console.log(births);
  console.log(deaths);
});
