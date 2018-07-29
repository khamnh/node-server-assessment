'use strict';
var mongoose = require('mongoose');
var Users = mongoose.model('users');

function get_all_user(req, res) {
    Users.find({}, { _id: 0 }, function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
}

function get_user_by_id(req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Users.findOne(query, { _id: 0 }, function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
}

function create_new_user (req, res) {
    var new_user = new Users(req.body);
    new_user.save(function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function update_user (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    var value = req.body;
    Users.updateOne(query, value, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function remove_user (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Users.deleteOne(query, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

module.exports = { get_all_user, get_user_by_id, create_new_user, update_user, remove_user };