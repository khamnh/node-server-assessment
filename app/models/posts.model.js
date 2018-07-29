'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    id: Number,
    userId: Number,
    title: String,
    body: String
});

module.exports = mongoose.model('posts', PostSchema);