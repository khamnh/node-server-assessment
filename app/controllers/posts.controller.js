'use strict';
var mongoose = require('mongoose');
var Posts = mongoose.model('posts');

function get_all_post (req, res) {
    Posts.find({}, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function get_post_by_id (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Posts.findOne(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function get_posts_by_user_id (req, res) {
    var id = req.params.id;
    var query = { userId: parseInt(id) };
    Posts.find(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function create_new_post (req, res) {
    var new_post = new Posts(req.body);
    new_post.save(function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function update_post (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    var value = req.body;
    Posts.updateOne(query, value, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function remove_post (req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Posts.deleteOne(query, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

module.exports = { get_all_post, get_post_by_id, get_posts_by_user_id, create_new_post, update_post, remove_post };