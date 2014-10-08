var db = require('../config/mongo_database');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var tokenManager = require('../config/token_manager');
var userRoles = require('../config/routingConfig').userRoles;
var accesLevels = require('../config/routingConfig').accessLevels;



exports.setComment= function(req, res) {
    var nama = req.body.nama,
        email = req.body.email,
        isi = req.body.isi;

    var comment = new db.commentModel();
    comment.nama = nama;
    comment.email = email;
    comment.isi = isi;

    comment.save(function(err, data) {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            console.log(data);
            return res.send(200);
        }
    });
};
