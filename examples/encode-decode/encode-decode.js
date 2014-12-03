var Pew = require('../../lib/pew');
var fs = require('fs');
var pew = new Pew();
console.log('Encoding Image');
pew.encode(__dirname + '/nodejs.png', function(err, encodedImage){
  if(err) throw err;

  console.log('Image encoded');
  pew.decode(encodedImage, function(err, buff){
    if(err) throw err;

    console.log('Decoding image');

    fs.writeFile('decoded_image.png', buff, function(err){
      if(err) throw err;

      console.log('Image decoded');
    });

  });
});
