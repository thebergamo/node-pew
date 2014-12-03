var fs = require('fs');
var ProtoBuf = require('protobufjs');
var builder = ProtoBuf.loadProtoFile(__dirname + '/../proto/image.proto');
var protoImage = builder.build('Image');

exports.encode = function(image, cb){
  //receive a path/to/image
  // return a buffer
  fs.readFile(image, function(err, data){
    if(err) cb(err);

    var base64 = data.toString('base64');
    var imageBase64 = new protoImage(base64);
    try{
      var buffer = imageBase64.encode();
      cb(null, buffer.toBuffer());
    }catch(e){
      if(e.encoded){
        //truncated error
        cb(e.encoded);
      }else{
        //general error
        cb(e);

      }
    }

  });
};

exports.decode = function(buffer, cb){
  //receive a buffer and return a buffer of base64
  try{
    var img = protoImage.decode(buffer);
    var imgBuff = new Buffer(img.image, 'base64');
    cb(null, imgBuff);
  }catch(e){
    if(e.decoded){
      //truncated error
      cb(e.decoded);
    }else{
      cb(e);
    }
  }
};
