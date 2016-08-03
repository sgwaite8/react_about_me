var express = require('express');
var router = express.Router();
var User = require('../models/user');

//get all the users
router.get('/', function(req, res, next) {
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users)
  });
});

//add a user and save them to the database
router.post('/', function(req, res, next){
  var name = req.body.name;
  var newUser = User({name: name});

  newUser.save(function(err, user){
    if (err) console.log(err);
    res.json(user);
  });
});

module.exports = router;
