'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema ({
    id: Number,
    userId: Number,
    title: String
});

module.exports = mongoose.model('albums', AlbumSchema);