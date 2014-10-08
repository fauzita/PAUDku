var db = require('../config/mongo_database');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var tokenManager = require('../config/token_manager');
var userRoles = require('../config/routingConfig').userRoles;
var accesLevels = require('../config/routingConfig').accessLevels;



exports.setLembaga = function(req, res) {
    var nama = req.body.namaLembaga,
        ijin = req.body.ijin,
        namaPenyelenggara = req.body.namaPenyelenggara,
        tanggal_berdiri = req.body.tanggalBerdiri,
        telepon = req.body.telepon,
        email =  req.body.email,
        alamat =  req.body.alamat;

    var lembaga = new db.lembagaModel();
    lembaga.nama_lembaga = nama;
    lembaga.no_ijin = ijin;
    lembaga.nama_penyelenggara = namaPenyelenggara;
    lembaga.tanggal_berdiri = tanggal_berdiri;
    lembaga.telepon = telepon;
    lembaga.email = email;
    lembaga.alamat = alamat;

    lembaga.save(function(err, data) {
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

exports.getLembaga = function(req, res) {
    var token = req.headers['x-token'];
    if(token) {
        jwt.verify(token, secret.secretToken , function(err, data) {
            if (err) {
                console.log(err);
                res.send(502);
            } else
            console.log(data.id);
            db.lembagaModel.find('pendidikModel', {}, {_id: 0},  function(err, lembaga) {
                console.log(lembaga);
                return res.json(lembaga);
            });

        });
    }
};
