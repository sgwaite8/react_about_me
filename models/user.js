var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  url: {type: String, required: true},
  text: {type: String, required: true}
})

var User = mongoose.model('User', userSchema);
//make this available to our other files
module.exports = User;
