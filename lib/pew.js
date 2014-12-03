var proto = require('./proto');
var crypto = require('./crypto');

var Pew = function(options){
  this._options = options || {};

  if(!!options)
    crypto.key(options);
}

Pew.prototype.encode = function(image, cb){
  proto.encode(image, function(err, data){
    if(err) cb(err);

    if(!!this._options)
      data = crypto.encrypt(data);

    cb(null, data);
  });
};

Pew.prototype.decode = function(buffer, cb){
  proto.decode(buffer, function(err, data){
    if(err) cb(err);

    if(!!this._options)
      data = crypto.decrypt(new Buffer(data, 'base64'));

    cb(null, data);
  });
}

module.exports = Pew;
