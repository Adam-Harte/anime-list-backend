var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
   first_name: String,
   last_name: String,
   email: String,
   password: String,
   profile_img: String,
   description: String,
   role: {
      type: String,
      enum: ['user', 'admin', 'vip'],
      default: 'user'
   }
});