var fs = require('fs');
var ursa = require('ursa');

var key = {
    /*public : fs.readFileSync(__dirname + '/../keys/public_key.pem', 'utf8'),
    private : fs.readFileSync(__dirname + '/../keys/private_key.pem', 'utf8')*/
};

exports.key = function(keys){
  key = keys;
}

exports.encrypt = function(payload, type){
    var engine = ursa.createPublicKey(key.public);

    return engine.encrypt(new Buffer(payload),
    type);
};

exports.decrypt = function(payload, type){
    var engine = ursa.createPrivateKey(key.private);

    return engine.decrypt(new Buffer(payload),
    type);
};
