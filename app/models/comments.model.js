'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    id: Number,
    postId: Number,
    name: String,
    email: String,
    body: String
});

module.exports = mongoose.model('comments', CommentSchema);