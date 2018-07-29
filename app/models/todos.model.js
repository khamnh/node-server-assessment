'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    id: Number,
    userId: Number,
    title: String,
    completed: Boolean
});

module.exports = mongoose.model('todos', TodoSchema);