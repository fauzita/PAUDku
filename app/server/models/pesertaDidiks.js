
var db = require('../config/mongo_database');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var tokenManager = require('../config/token_manager');
var userRoles = require('../config/routingConfig').userRoles;
var accesLevels = require('../config/routingConfig').accessLevels;

//Exports
// Add user to databse


exports.addPesertaDidik = function(req, res) {
    var noInduk = req.body.noInduk,
        namaLengkap = req.body.namaLengkap,
        namaPanggilan = req.body.namaPanggilan,
        jenisKelamin = req.body.jenisKelamin,
        tempatLahir = req.body.tempatLahir,
        tanggalLahir = req.body.tanggalLahir,
        agama = req.body.agama,
        kewarganegaraan = req.body.kewarganegaraan,
        anakKe = req.body.anakKe,
        jmlSdrKandung = req.body.jmlSdrKandung,
        jmlSdrTiri = req.body.jmlSdrTiri,
        jmlSdrAngkat = req.body.jmlSdrAngkat;
        keterangan = req.body.keterangan;

    var pesertaDidik = new db.pesertaDidikModel();
        pesertaDidik.no_induk = noInduk,
        pesertaDidik.pribadi.nama.lengkap = namaLengkap,
        pesertaDidik.pribadi.nama.panggilan = namaPanggilan,
        pesertaDidik.pribadi.jk = jenisKelamin,
        pesertaDidik.pribadi.lahir.tempat = tempatLahir,
        pesertaDidik.pribadi.lahir.tanggal = tanggalLahir,
        pesertaDidik.pribadi.agama = agama,
        pesertaDidik.pribadi.kewarganegaraan = kewarganegaraan,
        pesertaDidik.pribadi.saudara.kandung = jmlSdrKandung,
        pesertaDidik.pribadi.saudara.tiri  = jmlSdrTiri,
        pesertaDidik.pribadi.saudara.angkat = jmlSdrAngkat,
        pesertaDidik.keterangan = keterangan;

        pesertaDidik.nilai.jenis_kegiatan = '-';
        pesertaDidik.nilai.tanggal_kegiatan = '-';
        pesertaDidik.nilai.aspek = '-';
        pesertaDidik.nilai.penilaian = '-';
        pesertaDidik.nilai.saran = '-';

        pesertaDidik.alamat.kp ='-'; 
        pesertaDidik.alamat.desa = '-';
        pesertaDidik.alamat.kecamatan = '-';
        pesertaDidik.alamat.kabupaten = '-';
        pesertaDidik.alamat.kode_pos = '-';
        pesertaDidik.alamat.telp = '-';

        pesertaDidik.kesehatan.berat_badan = 0;
        pesertaDidik.kesehatan.tinggi_badan = 0;
        pesertaDidik.kesehatan.gol_darah = '-';
        pesertaDidik.kesehatan.penyakit = '-';
        pesertaDidik.kesehatan.imunisasi = '-';

        pesertaDidik.orangtua.ayah.nama = '-';
        pesertaDidik.orangtua.ayah.tmpt_lahir = '-';
        pesertaDidik.orangtua.ayah.tanggal_lahir = '-';
        pesertaDidik.orangtua.ayah.agama = '-';
        pesertaDidik.orangtua.ayah.kewarganegaraan = '-';
        pesertaDidik.orangtua.ayah.pendidikan = '-';
        pesertaDidik.orangtua.ayah.pekerjaan = '-';
        pesertaDidik.orangtua.ayah.penghasilan = '-';
        pesertaDidik.orangtua.ibu.nama = '-';
        pesertaDidik.orangtua.ibu.tmpt_lahir = '-';
        pesertaDidik.orangtua.ibu.tanggal_lahir = '-';
        pesertaDidik.orangtua.ibu.agama = '-';
        pesertaDidik.orangtua.ibu.kewarganegaraan = '-';
        pesertaDidik.orangtua.ibu.pendidikan = '-';
        pesertaDidik.orangtua.ibu.pekerjaan = '-';
        pesertaDidik.orangtua.ibu.penghasilan = '-';

    pesertaDidik.save(function(err, data) {
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

exports.addNilaiPesertaDidik = function(req, res) {
  db.pesertaDidikModel.findOne( {'no_induk':req.body.noInduk},  function(err, pesertaDidik) {
    console.log(pesertaDidik);
    if(!err) {
        pesertaDidik.nilai.jenis_kegiatan = req.body.jenisKegiatan;
        pesertaDidik.nilai.tanggal_kegiatan = req.body.tanggalKegiatan;
        pesertaDidik.nilai.aspek = req.body.aspek;
        pesertaDidik.nilai.penilaian = req.body.penilaian;
        pesertaDidik.nilai.saran = req.body.saran;
    }
    pesertaDidik.save(function(err, data) {
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

exports.addAlamatPesertaDidik = function(req, res) {
  db.pesertaDidikModel.findOne( {'no_induk':req.body.noInduk},  function(err, pesertaDidik) {
    console.log(pesertaDidik);
    if(!err) {
        pesertaDidik.alamat.kp = req.body.kampung;
        pesertaDidik.alamat.desa = req.body.desa;
        pesertaDidik.alamat.kecamatan = req.body.kecamatan;
        pesertaDidik.alamat.kabupaten = req.body.kabupaten;
        pesertaDidik.alamat.kode_pos = req.body.kodePos;
        pesertaDidik.alamat.telp = req.body.telepon;
    }
    pesertaDidik.save(function(err, data) {
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

exports.addKesehatanPesertaDidik = function(req, res) {
  db.pesertaDidikModel.findOne( {'no_induk':req.body.noInduk},  function(err, pesertaDidik) {
    console.log(pesertaDidik);
    if(!err) {
        pesertaDidik.kesehatan.berat_badan = req.body.tinggi;
        pesertaDidik.kesehatan.tinggi_badan = req.body.berat;
        pesertaDidik.kesehatan.gol_darah = req.body.golDarah;
        pesertaDidik.kesehatan.penyakit = req.body.penyakit;
        pesertaDidik.kesehatan.imunisasi = req.body.imunisasi;
    }
    pesertaDidik.save(function(err, data) {
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

exports.addOrangTuaPesertaDidik = function(req, res) {
  db.pesertaDidikModel.findOne( {'no_induk':req.body.noInduk},  function(err, pesertaDidik) {
    console.log(pesertaDidik);
    if(!err) {
        pesertaDidik.orangtua.ayah.nama = req.body.namaAyah;
        pesertaDidik.orangtua.ayah.tmpt_lahir = req.body.tempatLahirAyah;
        pesertaDidik.orangtua.ayah.tanggal_lahir = req.body.tanggalLahirAyah;
        pesertaDidik.orangtua.ayah.agama = req.body.agamaAyah;
        pesertaDidik.orangtua.ayah.kewarganegaraan = req.body.kewarganegaraanAyah;
        pesertaDidik.orangtua.ayah.pendidikan = req.body.pendidikanAyah;
        pesertaDidik.orangtua.ayah.pekerjaan = req.body.pekerjaanAyah;
        pesertaDidik.orangtua.ayah.penghasilan = req.body.penghasilanAyah;
        pesertaDidik.orangtua.ibu.nama = req.body.namaIbu;
        pesertaDidik.orangtua.ibu.tmpt_lahir = req.body.tempatLahirIbu;
        pesertaDidik.orangtua.ibu.tanggal_lahir = req.body.tanggalLahirIbu;
        pesertaDidik.orangtua.ibu.agama = req.body.agamaIbu;
        pesertaDidik.orangtua.ibu.kewarganegaraan = req.body.kewarganegaraanIbu;
        pesertaDidik.orangtua.ibu.pendidikan = req.body.pendidikanIbu;
        pesertaDidik.orangtua.ibu.pekerjaan = req.body.pekerjaanIbu;
        pesertaDidik.orangtua.ibu.penghasilan = req.body.penghasilanIbu;
    }
    pesertaDidik.save(function(err, data) {
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

exports.listPesertaDidik = function(req, res) {
    db.pesertaDidikModel.find('pesertaDidikModel', {}, {_id: 0},  function(err, pesertaDidik) {
      console.log(pesertaDidik);
      var data = [];
      for(var i = 0, l = pesertaDidik.length; i < l; i++){
        var JSONID = 0;
        var no_induk = pesertaDidik[i].no_induk;
        var nama_lengkap = pesertaDidik[i].pribadi.nama.lengkap;
        var nama_panggilan = pesertaDidik[i].pribadi.nama.panggilan;
        var jk = pesertaDidik[i].pribadi.jk;
        var tmpt_lahir = pesertaDidik[i].pribadi.lahir.tempat;
        var tgl_lahir = pesertaDidik[i].pribadi.lahir.tanggal;
        var agama = pesertaDidik[i].pribadi.agama;
        var kewarganegaraan = pesertaDidik[i].pribadi.kewarganegaraan;
        var jmlSdrKandung = pesertaDidik[i].pribadi.saudara.kandung;
        var jmlSdrTiri = pesertaDidik[i].pribadi.saudara.tiri;
        var jmlSdrAngkat = pesertaDidik[i].pribadi.saudara.angkat;
        var keterangan = pesertaDidik[i].keterangan;
        //nilai

        //alamat
        var kp = pesertaDidik[i].alamat.kp;
        var desa = pesertaDidik[i].alamat.desa;
        var kecamatan = pesertaDidik[i].alamat.kecamatan;
        var kabupaten = pesertaDidik[i].alamat.kabupaten;
        var kode_pos = pesertaDidik[i].alamat.kode_pos;
        var telp = pesertaDidik[i].alamat.telp;
        //kesehatan
        var berat_badan = pesertaDidik[i].kesehatan.berat_badan;
        var tinggi_badan = pesertaDidik[i].kesehatan.tinggi_badan;
        var gol_darah = pesertaDidik[i].kesehatan.gol_darah;
        var penyakit = pesertaDidik[i].kesehatan.penyakit;
        var imunisasi = pesertaDidik[i].kesehatan.imunisasi;
        //orangtua
        var nama_ayah = pesertaDidik[i].orangtua.ayah.nama;
        var tempat_lahir_ayah = pesertaDidik[i].orangtua.ayah.tmpt_lahir;
        var tanggal_lahir_ayah = pesertaDidik[i].orangtua.ayah.tanggal_lahir;
        var agama_ayah = pesertaDidik[i].orangtua.ayah.agama;
        var kewarganegaraan_ayah = pesertaDidik[i].orangtua.ayah.kewarganegaraan;
        var pendidikan_ayah = pesertaDidik[i].orangtua.ayah.pendidikan;
        var pekerjaan_ayah = pesertaDidik[i].orangtua.ayah.pekerjaan;
        var penghasilan_ayah = pesertaDidik[i].orangtua.ayah.penghasilan;
        var nama_ibu = pesertaDidik[i].orangtua.ibu.nama;
        var tempat_lahir_ibu = pesertaDidik[i].orangtua.ibu.tmpt_lahir;
        var tanggal_lahir_ibu = pesertaDidik[i].orangtua.ibu.tanggal_lahir;
        var agama_ibu = pesertaDidik[i].orangtua.ibu.agama;
        var kewarganegaraan_ibu = pesertaDidik[i].orangtua.ibu.kewarganegaraan;
        var pendidikan_ibu = pesertaDidik[i].orangtua.ibu.pendidikan;
        var pekerjaan_ibu = pesertaDidik[i].orangtua.ibu.pekerjaan;
        var penghasilan_ibu = pesertaDidik[i].orangtua.ibu.penghasilan;


        var dat = {
          "no_induk" : no_induk,
          "nama_lengkap" : nama_lengkap,
          "jk" : jk,          
          "tmpt_lahir" : tmpt_lahir,
          "tgl_lahir" : tgl_lahir,
          "agama" : agama,
          "kewarganegaraan" : kewarganegaraan,
          "keterangan" : keterangan,
           //alamat
          "kp" : kp,
          "desa" : desa,
          "kecamatan" : kecamatan,
          "kabupaten" : kabupaten,
          "kode_pos" : kode_pos,
          "telp" : telp,
          //kesehatan
          "berat_badan" : berat_badan,
          "tinggi_badan" : tinggi_badan,
          "gol_darah" : gol_darah,
          "penyakit" : penyakit,
          "imunisasi" : imunisasi,
          //orangtua
          "nama_ayah" : nama_ayah,
          "tempat_lahir_ayah" : tempat_lahir_ayah,
          "tanggal_lahir_ayah" : tanggal_lahir_ayah,           
          "agama_ayah" : agama_ayah,
          "kewarganegaraan_ayah" : kewarganegaraan_ayah,
          "pendidikan_ayah" : pendidikan_ayah,
          "pekerjaan_ayah" : pekerjaan_ayah,
          "penghasilan_ayah" : penghasilan_ayah,
          "nama_ibu" : nama_ibu,
          "tempat_lahir_ibu" : tempat_lahir_ibu,
          "tanggal_lahir_ibu" : tanggal_lahir_ibu,           
          "agama_ibu" : agama_ibu,
          "kewarganegaraan_ibu" : kewarganegaraan_ibu,
          "pendidikan_ibu" : pendidikan_ibu,
          "pekerjaan_ibu" : pekerjaan_ibu,
          "penghasilan_ibu" : penghasilan_ibu,


        };
        JSONID++;
        data.push(dat);
      };
      console.log(data);
      res.send(JSON.stringify(data));
    });
};

exports.deletePesertaDidik = function(req, res) {
  db.pesertaDidikModel.remove( {'no_induk':req.body.noInduk},  function(err) {
      if (err) {
          console.log(err);
          return res.send(500);
      }
      else {
          return res.send(200);
      }
  });
};