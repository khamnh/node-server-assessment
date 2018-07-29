'use strict';
var mongoose = require('mongoose');
var Todos = mongoose.model('todos');

function get_all_todo (req, res) {
    Todos.find({}, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function get_todo_by_id (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Todos.findOne(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function get_todos_by_user_id (req, res) {
    var id = req.params.id;
    var query = { userId: parseInt(id) };
    Todos.find(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

module.exports = { get_all_todo, get_todo_by_id, get_todos_by_user_id };