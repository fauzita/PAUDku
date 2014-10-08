var db = require('../config/mongo_database');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');
var tokenManager = require('../config/token_manager');
var userRoles = require('../config/routingConfig').userRoles;
var accesLevels = require('../config/routingConfig').accessLevels;

exports.login = function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';

    
    if (username == '' || password == '') {
        return res.send(401);
    }

    db.userModel.findOne({username: username}, function (err, user) {
        if (err) {
            console.log(err);
            return res.send(401);
        }

        if (user == undefined) {
            return res.send(401);
        }

        user.comparePassword(password, function(isMatch) {
            if (!isMatch) {
                console.log("Attempt failed to login with " + user.username);
                return res.send(401);
            }
            else {
                if (user.role == "admin") {
                    userRole = userRoles.admin;
                } else {
                    userRole = userRoles.user;
                }
                console.log(user);
                var newToken = jwt.sign({id: user._id}, secret.secretToken, { expiresInMinutes: tokenManager.TOKEN_EXPIRATION });
                return res.json({ token:newToken, name: user.username, userRole:userRole});
            }
            
        });

    });
};

exports.logout = function(req, res) {
    if (req.user) {
        tokenManager.expireToken(req.headers);
        delete req.user;
        return res.send(200);
    }
};

exports.getUser = function(req, res) {
    var token = req.headers['x-token'];
    if(token) {
        jwt.verify(token, secret.secretToken , function(err, data) {
            if (err) {
                console.log(err);
                res.send(502);
            } else
            console.log(data.id);
            db.userModel.findOne({ _id:data.id}, function(err, user){
                console.log(user);
                if (user.role == "admin") {
                    userRole = userRoles.admin;
                } else {
                    userRole = userRoles.user;
                }
                return res.json({ token:token, name: user.username, userRole:userRole});
            });

        });
    }
};



exports.register = function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';
    var password2 = req.body.password2 || '';
    var email =  req.body.email || '';
    var name = req.body.name || '';
    var role = req.body.role || '';

    if (username == '' || password == '' || password != password2) {
        return res.send(400);
    }

    var user = new db.userModel();
    user.username = username;
    user.password = password;
    user.email  = email;
    user.name = name;
    user.role = role;

    user.save(function(err) {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};


exports.registerUser = function(req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';
    var role = 'user';
    

    if (username == '' || password == '' ) {
        return res.send(400);
    }

    var user = new db.userModel();
    user.username = username;
    user.password = password;
    user.role = role;

    user.save(function(err) {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(200);
        }
    });
};

exports.update = function(req, res) {
    var token = req.headers['x-token'];
    if(token) {
        jwt.verify(token, secret.secretToken , function(err, data) {
            if (err) {
                console.log(err);
                res.send(502);
            } else
            console.log(data.id);
            db.userModel.findOne({ _id:data.id}, function(err, user){
                console.log(user);
                user.password = req.body.password;
                user.save(function(err) {
                    if (err) {
                        console.log(err);
                        return res.send(500);
                    }
                    else {
                        return res.send(200);
                    }
                });
            });

        });
    }
};
