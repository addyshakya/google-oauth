var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shakyaaditya469:Aaditya1@cluster007.ivqtjsx.mongodb.net/?retryWrites=true&w=majority')

var userSchema = mongoose.Schema({
  username:String,
  password:String,
})

module.exports = mongoose.model('users', userSchema);