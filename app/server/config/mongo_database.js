var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;
var userRoles = require('../config/routingConfig').userRoles;

var dbHost = 'fauzita:11302286.jipaw@ds043210.mongolab.com:43210';
var dbName = 'paudku';
connect();


/* establish the database connection */
function connect(){
  var dbURL = 'mongodb://' + dbHost + '/' + dbName;
  mongoose.connect(dbURL, function(err ){
    if (err) {
      console.log('koneksi ke database bermasalah : ' + err );
      mongoose.disconnect();
    } else {
      console.log('Terkoneksi ke database: ' + dbName);
    }
  });
}


var Schema = mongoose.Schema;

// User schema
var User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name:   {type: String},
    email: {type: String },
    role:  {type: String },
    created: { type: Date, default: Date.now }
});

var Comment = new Schema({
  nama : {type: String},
  email : {type: String},
  isi : {tpe: String}
})

// schema
var Lembaga = new Schema({
    nama_lembaga: { type: String, required: true, unique: true },
    no_ijin: { type: String,},
    nama_penyelenggara:   {type: String, required: true},
    tanggal_berdiri: {type: String},
    telepon: {type: String},
    email: {type: String},
    alamat: {type: String}
});

// Pendidik
var Pendidik = new Schema({
  idPeg : {type: String, unique : true },
  nama : {type : String },
  jabatan : String,
  jk : String,
  tmpt_lahir : String,
  tgl_lahir : Date,
  agama : String,
  alamat :{
    kp : String,
    desa : String,
    kecamatan : String,
    kabupaten : String,
    kode_pos : String,
    telp : String
  },
  pendidikan: {
    sd: {
      nama: {type: String},
      tahun_masuk : {type: String},
      tahun_lulus: {type: String}
    },
    smp: {
      nama: {type: String},
      tahun_masuk : {type: String},
      tahun_lulus: {type: String}
    },
    sma: {
      nama: {type: String},
      jurusan: {type: String},
      tahun_masuk : {type: String},
      tahun_lulus: {type: String}
    },
    strata: {
      nama: {type: String},
      jurusan: {type: String},
      jenjang : {type: String},
      tahun_masuk : {type: String},
      tahun_lulus: {type: String}
    },
    masa_kerja: {type: String},
  },
  status : String,
  keterangan : String


});

var PesertaDidik = new Schema({
  no_induk : {type : String, unique: true },
  pribadi : {
    nama : {
      lengkap: {type : String },
      panggilan: {type: String}
    },
    jk : String,
    lahir :{
      tempat : String,
      tanggal : Date,
    },
    agama : String,
    kewarganegaraan : String,
    saudara :{
      kandung : String,
      tiri : String,
      angkat : String
    },
    bahasa : {type: String},
  },
  alamat :{
    kp : String,
    desa : String,
    kecamatan : String,
    kabupaten : String,
    kode_pos : String,
    telp : String
  },
  kesehatan: {
    berat_badan: {type: Number},
    tinggi_badan: {type: Number},
    gol_darah: {type: String},
    penyakit: {type: String},
    imunisasi: {type: String}
  },
  orangtua: {
      ayah: {
        nama: {type: String},
        tmpt_lahir: {type: String},
        tanggal_lahir: {type: String},
        agama: {type: String},
        kewarganegaraan: {type: String},
        pendidikan: {type: String},
        pekerjaan: {type: String},
        penghasilan: {type: String}
      },
      ibu: {
        nama: {type: String},
        tmpt_lahir: {type: String},
        tanggal_lahir: {type: String},
        agama: {type: String},
        kewarganegaraan: {type: String},
        pendidikan: {type: String},
        pekerjaan: {type: String},
        penghasilan: {type: String}
      }
  },
  nilai: {
    jenis_kegiatan :  {type: String},
    tanggal_kegiatan : {type: String},
    aspek: {type: String},
    penilaian: {type: String},
    saran: {type: String},
  },
  keterangan: {type: String}
});



// Bcrypt middleware on UserSchema
User.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

//Password verification
User.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(isMatch);
    });
};


//Define Models
var userModel = mongoose.model('User', User);
var pendidikModel = mongoose.model('Pendidik', Pendidik);
var pesertaDidikModel = mongoose.model('PesertaDidik', PesertaDidik);
var lembagaModel = mongoose.model('Lembaga', Lembaga);
var commentModel = mongoose.model('Comment', Comment);

// Export Models
exports.userModel = userModel;
exports.pendidikModel = pendidikModel;
exports.pesertaDidikModel = pesertaDidikModel;
exports.lembagaModel = lembagaModel;
exports.commentModel = commentModel;