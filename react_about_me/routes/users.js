var express = require('express');
var router = express.Router();

//get all the users
router.get('/', function(req, res, next) {
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users)
  });
});

module.exports = router;
