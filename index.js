var createthumbnails = require('./createthumbnails');
var readline = require('readline');


var theDirectory;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter directory: ', function(directory) {
  // theDirectory = directory;
  // console.log(theDirectory); //Second!
  createthumbnails(directory);
  rl.close();
});

// console.log(theDirectory); //First
