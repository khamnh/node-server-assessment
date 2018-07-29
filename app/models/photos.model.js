var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    id: Number,
    albumId: Number,
    title: String,
    url: String,
    thumbnailUrl: String
});

module.exports = mongoose.model('photos', PhotoSchema);