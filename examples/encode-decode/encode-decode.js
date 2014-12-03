var pew = require('../../lib/pew');
var fs = require('fs');
var Pew = new pew();
console.log('Encoding Image');
Pew.encode(__dirname + '/nodejs.png', function(err, encodedImage){
  if(err) throw err;

  console.log('Image encoded');
  Pew.decode(encodedImage, function(err, buff){
    if(err) throw err;

    console.log('Decoding image');

    fs.writeFile('decoded_image.png', buff, function(err){
      if(err) throw err;

      console.log('Image decoded');
    });

  });
});
