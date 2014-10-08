
var db = require('../config/mongo_database');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var tokenManager = require('../config/token_manager');
var pendidikRoles = require('../config/routingConfig').pendidikRoles;
var accesLevels = require('../config/routingConfig').accessLevels;


//Exports
// Add pendidik to databse
exports.addPendidik = function(req, res) {
    var idPeg = req.body.idPeg,
        nama = req.body.nama,
        jabatan = req.body.jabatan,
        jenisKelamin = req.body.jenisKelamin,
        tanggalLahir = req.body.tanggalLahir,
        tempatLahir = req.body.tempatLahir,
        agama = req.body.agama,
        status =  req.body.status,
        keterangan = req.body.keterangan;

    var pendidik = new db.pendidikModel();
    pendidik.idPeg = idPeg;
    pendidik.nama = nama;
    pendidik.jabatan = jabatan;
    pendidik.jk = jenisKelamin;
    pendidik.tgl_lahir = tanggalLahir;
    pendidik.tmpt_lahir = tempatLahir;
    pendidik.agama = agama;
    pendidik.status = status;
    pendidik.keterangan = keterangan;

    pendidik.alamat.kp = '-'; 
    pendidik.alamat.desa = '-'; 
    pendidik.alamat.kecamatan = '-'; 
    pendidik.alamat.kabupaten = '-'; 
    pendidik.alamat.kode_pos = '-'; 
    pendidik.alamat.telp = '-'; 
    pendidik.pendidikan.sd.nama = '-';

    pendidik.pendidikan.sd.tahun_masuk = '-';
    pendidik.pendidikan.sd.tahun_lulus = '-';
    pendidik.pendidikan.smp.nama = '-';
    pendidik.pendidikan.smp.tahun_masuk = '-';
    pendidik.pendidikan.smp.tahun_lulus = '-';
    pendidik.pendidikan.sma.nama = '-';
    pendidik.pendidikan.sma.jurusan = '-';
    pendidik.pendidikan.sma.tahun_masuk = '-';
    pendidik.pendidikan.sma.tahun_lulus = '-';
    pendidik.pendidikan.strata.nama = '-';
    pendidik.pendidikan.strata.jurusan = '-';
    pendidik.pendidikan.strata.jenjang = '-';
    pendidik.pendidikan.strata.tahun_masuk = '-';
    pendidik.pendidikan.strata.tahun_lulus = '-';


    pendidik.save(function(err, data) {
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
exports.addAlamatPendidik = function(req, res) {
  db.pendidikModel.findOne( {'idPeg':req.body.idPeg},  function(err, pendidik) {
    console.log(pendidik);
    if(!err) {
        pendidik.alamat.kp = req.body.kampung;
        pendidik.alamat.desa = req.body.desa;
        pendidik.alamat.kecamatan = req.body.kecamatan;
        pendidik.alamat.kabupaten = req.body.kabupaten;
        pendidik.alamat.kode_pos = req.body.kodePos;
        pendidik.alamat.telp = req.body.telepon;
    }
    pendidik.save(function(err, data) {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            console.log(data);
            return res.send(200);
        }
    });
  });
};

exports.addPendidikanPendidik = function(req, res) {
  db.pendidikModel.findOne( {'idPeg':req.body.idPeg},  function(err, pendidik) {
    console.log(pendidik);
    if(!err) {
        pendidik.pendidikan.sd.nama = req.body.namaSD;
        pendidik.pendidikan.sd.tahun_masuk = req.body.tahunMasukSD;
        pendidik.pendidikan.sd.tahun_lulus = req.body.tahunLulusSD;
        pendidik.pendidikan.smp.nama = req.body.namaSMP;
        pendidik.pendidikan.smp.tahun_masuk = req.body.tahunMasukSMP;
        pendidik.pendidikan.smp.tahun_lulus = req.body.tahunLulusSMP;
        pendidik.pendidikan.sma.nama = req.body.namaSMA;
        pendidik.pendidikan.sma.jurusan = req.body.jurusanSMA;
        pendidik.pendidikan.sma.tahun_masuk = req.body.tahunMasukSMA;
        pendidik.pendidikan.sma.tahun_lulus = req.body.tahunLulusSMA;
        pendidik.pendidikan.strata.nama = req.body.namaPG;
        pendidik.pendidikan.strata.jurusan = req.body.jurusanPG;
        pendidik.pendidikan.strata.jenjang = req.body.jenjangPG;
        pendidik.pendidikan.strata.tahun_masuk = req.body.tahunMasukPG;
        pendidik.pendidikan.strata.tahun_lulus = req.body.tahunLulusPG;

    }
    pendidik.save(function(err, data) {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            console.log(data);
            return res.send(200);
        }
    });
  });
};

exports.listPendidik = function(req, res) {
    db.pendidikModel.find('pendidikModel', {}, {_id: 0},  function(err, pendidik) {
      console.log(pendidik);
      var data = [];
      for(var i = 0, l = pendidik.length; i < l; i++){
        var JSONID = 0;
        var idPeg = pendidik[i].idPeg;
        var nama = pendidik[i].nama;
        var jabatan = pendidik[i].jabatan;
        var jk = pendidik[i].jk;
        var tgl_lahir = pendidik[i].tgl_lahir;
        var tmpt_lahir = pendidik[i].tmpt_lahir;
        var agama = pendidik[i].agama;
        var status = pendidik[i].status;
        var keterangan = pendidik[i].keterangan;
        //alamat
        var kp = pendidik[i].alamat.kp;
        var desa = pendidik[i].alamat.desa;
        var kecamatan = pendidik[i].alamat.kecamatan;
        var kabupaten = pendidik[i].alamat.kabupaten;
        var kode_pos = pendidik[i].alamat.kode_pos;
        var telp = pendidik[i].alamat.telp;
        //pendidikan
        var sd = pendidik[i].pendidikan.sd.nama;
        var tahun_masuk_sd = pendidik[i].pendidikan.sd.tahun_masuk;
        var tahun_lulus_sd = pendidik[i].pendidikan.sd.tahun_lulus;
        var smp = pendidik[i].pendidikan.sd.nama;
        var tahun_masuk_smp = pendidik[i].pendidikan.smp.tahun_masuk;
        var tahun_lulus_smp = pendidik[i].pendidikan.smp.tahun_lulus;
        var sma = pendidik[i].pendidikan.sma.nama;
        var jurusan_sma = pendidik[i].pendidikan.sma.jurusan;
        var tahun_masuk_sma = pendidik[i].pendidikan.sma.tahun_masuk;
        var tahun_lulus_sma = pendidik[i].pendidikan.sma.tahun_lulus;
        var strata = pendidik[i].pendidikan.strata.nama;
        var jurusan_strata = pendidik[i].pendidikan.strata.jurusan;
        var jenjang_strata = pendidik[i].pendidikan.strata.jenjang;
        var tahun_masuk_strata = pendidik[i].pendidikan.strata.tahun_masuk;
        var tahun_lulus_strata = pendidik[i].pendidikan.strata.tahun_lulus;

        var dat = {
          "idPeg" : idPeg,
          "nama" : nama,
          "jabatan" : jabatan,
          "jk" : jk,
          "tgl_lahir" : tgl_lahir,
          "tmpt_lahir" : tmpt_lahir,
          "agama" : agama,
          "status" : status,
          "keterangan" : keterangan,
          //alamat
          "kp" : kp,
          "desa" : desa,
          "kecamatan" : kecamatan,
          "kabupaten" : kabupaten,
          "kode_pos" : kode_pos,
          "telp" : telp,
          //pendidikan
          "sd" : sd,
          "tahun_masuk_sd" : tahun_masuk_sd,
          "tahun_lulus_sd" : tahun_lulus_sd,
          "smp" : smp,
          "tahun_masuk_smp" : tahun_masuk_smp,
          "tahun_lulus_smp" : tahun_lulus_smp,
          "sma" : sma,
          "jurusan_sma" : jurusan_sma,
          "tahun_masuk_sma" : tahun_masuk_sma,
          "tahun_lulus_sma" : tahun_lulus_sma,
          "strata" : strata,
          "jurusan_strata" : jurusan_strata,
          "jenjang_strata" : jenjang_strata,
          "tahun_masuk_strata" : tahun_masuk_strata,
          "tahun_lulus_strata" : tahun_lulus_strata,
        };
        JSONID++;
        data.push(dat);
      };
      console.log(data);
      res.send(JSON.stringify(data));
    });
};

exports.deletePendidik = function(req, res) {
  db.pendidikModel.remove( {'idPeg':req.body.idPeg},  function(err) {
      if (err) {
          console.log(err);
          return res.send(500);
      }
        else {
          return res.send(200);
      }
  });
};