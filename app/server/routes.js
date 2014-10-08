

var users = require('../server/models/users');
var lembaga = require('../server/models/lembagas');
var pendidik = require('../server/models/pendidiks');
var pesertaDidik = require('../server/models/pesertaDidiks');
var comments = require('../server/models/comments');
var secret = require('../server/config/secret');
var jwt = require('express-jwt');
var tokenManager = require('../server/config/token_manager');



module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls authentication routes

    //Create a new user
    app.post('/user', users.register);
    app.get('/user', users.getUser);
    app.post('/updateUser', users.update);
    app.post('/registerUser', users.registerUser);


    //Login
    app.post('/login', users.login);

    //Logout
    app.get('/logout', users.logout);
    
    //Comment
    app.post('/about/comment', comments.setComment);

    //Overview Admin
    //app.get('/admin', jwt({secret: secret.secretToken}), tokenManager.verifyToken );
    //Get all pendidik
    app.get('/admin/get/pendidik', pendidik.listPendidik );
    app.post('/admin/post/pendidik', pendidik.addPendidik );
    app.post('/admin/post/alamatPendidik', pendidik.addAlamatPendidik );
    app.post('/admin/post/pendidikanPendidik', pendidik.addPendidikanPendidik );
    app.post('/admin/post/deletePendidik', pendidik.deletePendidik );
    
    //Get all pesertaDidik
    app.get('/admin/get/pesertaDidik', pesertaDidik.listPesertaDidik );
    app.post('/admin/post/pesertaDidik', pesertaDidik.addPesertaDidik );
    app.post('/admin/post/nilaiPesertaDidik', pesertaDidik.addNilaiPesertaDidik );
    app.post('/admin/post/alamatPesertaDidik', pesertaDidik.addAlamatPesertaDidik );
    app.post('/admin/post/kesehatanPesertaDidik', pesertaDidik.addKesehatanPesertaDidik );
    app.post('/admin/post/orangTuaPesertaDidik', pesertaDidik.addOrangTuaPesertaDidik );
    app.post('/admin/post/deletePesertaDidik', pesertaDidik.deletePesertaDidik );
    
    app.get('/admin/pesertaDidik/:id', jwt({secret: secret.secretToken}), tokenManager.verifyToken );

    //Create a new pesertaDidik
    app.post('/admin/post/pesertaDidik', pesertaDidik.addPesertaDidik );





    //Create a new pesertaDidik
    app.post('/admin/post/lembaga', lembaga.setLembaga );
    //Create a new pesertaDidik
    app.get('/admin/get/lembaga', lembaga.getLembaga );
    //Edit the pesertaDidik id
    app.put('/admin/post/:id', jwt({secret: secret.secretToken}), tokenManager.verifyToken );

    //Get all pesertaDidik
    //app.get('/admin/report', reports.sendFile );

    //Like the post id
    //app.post('/admin', );

    //Unlike the post id
    //app.post('/admin/unlike', );

    //Get posts by tag
    //app.get('/admin/:tagName', ); 

    app.all('*', function(req, res, next) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.set('Access-Control-Allow-Credentials', true);
        res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
        res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
        if ('OPTIONS' == req.method) return res.send(200);
        next();
    });

    console.log('PAUDku API is starting on port 8080');

};



  
    // frontend routes =========================================================
    // route to handle all angular requests
/* 

*/


//Get all published post
//app.get('/post', routes.posts.list);

//Get all posts
//app.get('/post/all', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.listAll);

//Get the post id
//app.get('/post/:id', routes.posts.read); 

//Like the post id
//app.post('/post/like', routes.posts.like);

//Unlike the post id
//app.post('/post/unlike', routes.posts.unlike);

//Get posts by tag
//app.get('/tag/:tagName', routes.posts.listByTag); 

//Create a new post
//app.post('/post', jwt({secret: secret.secretToken}), tokenManager.verifyToken , routes.posts.create); 

//Edit the post id
//app.put('/post', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.update); 

//Delete the post id
//app.delete('/post/:id', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.posts.delete); 
