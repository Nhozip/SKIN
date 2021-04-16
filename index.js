var fs = require("fs");

var files = fs.readdirSync("data");
files.forEach(item => {
  if (item != ".DS_Store") {
    var k = fs.readdirSync("data/" + item);
    console.log(k);
  }
});
