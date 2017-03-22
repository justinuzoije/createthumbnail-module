var fs = require('fs');
var gm = require('gm');
var async = require('async');

// var directory = 'images';

function createthumbnails(directory) {
  function resizeImage(filename, callback) {
    gm(filename)
      .resize(240, 240)
      .write(filename, callback);
  }

  fs.readdir(directory, function(err, files) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('before', files);
    files = files.map(function(filename) {
      return directory + '/' + filename;
    });
    console.log('after', files);
    async.each(files, resizeImage, function(err) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('It worked.');
    });
    // callback(null);
  });
}

// createThumbnails('images');
module.exports = createthumbnails;
