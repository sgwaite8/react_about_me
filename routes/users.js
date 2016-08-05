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

router.get('/:id', function(req, res, next){
  User.findById(req.params.id, function(err, user){
    res.status(200).json(concert);
  });
});

//add a user and save them to the database
router.post('/', function(req, res, next){
 User.create({
  name: req.body.name,
  url: req.body.url,
  text: req.body.text
 }, function(err, user){
  res.status(200).json(user);
 });
});

//edit a user
router.put('/:id', function(req, res, next){
  User.findByIdAndUpdate(req.params.id, req.body, {new: true},
    function(err, user){
    if (err) console.log(err);
    res.json(user);
  });
});

//to delete a user
router.delete('/:id', function(req, res, next){
  User.findByIdAndRemove(req.params.id, function(err, user){
    if (err) console.log(err);
    res.json(user);
  });
});

module.exports = router;
