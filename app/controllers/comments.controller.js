'use strict';
var mongoose = require('mongoose');
var Comments = mongoose.model('comments');

function get_all_comment (req, res) {
    Comments.find({}, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
}

function get_comment_by_id (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Comments.findOne(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
}

function get_comments_by_post_id (req, res) {
    var id = req.params.id;
    var query = { postId: parseInt(id) };
    Comments.find(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
}

function create_new_comment (req, res) {
    var new_comment = new Comments(req.body);
    new_comment.save(function (err, results) {
        if (err) res.send(err);
        res.json(results);
    });
}

function update_comment (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    var value = req.body;
    Comments.updateOne(query, value, function (err, results) {
        if (err) res.send(err);
        res.json(results);
    });
}

function remove_comment (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Comments.deleteOne(query, function (err, results) {
        if (err) res.send(err);
        res.json(results);
    });
}

module.exports = { get_all_comment, get_comment_by_id, get_comments_by_post_id, create_new_comment, update_comment, remove_comment };