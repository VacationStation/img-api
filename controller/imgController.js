/**
 * Created by nkrei001 on 26.06.17.
 */
var mysql = require('mysql');
var DBConfig = require('../DBconfig.json');

var connection = mysql.createConnection({
    host: DBConfig.host,
    user: DBConfig.user,
    password: DBConfig.password,
    database: DBConfig.database
});

var ImgController = {
    functions : {},
    constants : {}
};

ImgController.functions.saveImage = function saveImage(data, cb){

    var decoded = decode(data);
    var post = {
        img: decoded
    };

    var id = 0;
    connection.query('INSERT INTO trn_image SET ?', post, function(err, result){
        if(err) {
            cb(err, null);
        }else{
            console.log(result);
            id = result.insertId;
            cb(null, id);
        }

    });
};

ImgController.functions.loadImage = function loadImage(id, cb){

    connection.query('SELECT img FROM trn_image WHERE img_id = ?', id, function(err, rows){
        if(err){
            cb(err, null);
        }else{
            var encoded = encode(rows[0].img);
            cb(null, encoded);
        }
    });

};



function decode(string){
    var decoded = Buffer.from(string, 'base64');
    return decoded;
};

function encode(data){
    var buffer = new Buffer(data, 'binary');
    var encoded = buffer.toString('base64');
    return encoded;
}

module.exports = ImgController;

