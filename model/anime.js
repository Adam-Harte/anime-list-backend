var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var AnimeSchema = new Schema({
   name: String,
   image: String,
   episodes: Array,
   description: String,
   genre: String,
   rating: Number,
   type: String,
   characters: Array
});