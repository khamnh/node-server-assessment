'use strict';
var mongoose = require('mongoose');
var Albums = mongoose.model('albums');

function get_all_album(req, res) {
    Albums.find({}, { _id: 0 }, function (err, results) {
        if (err) throw error;
        res.json(results);
    });
}

function get_album_by_id(req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Albums.findOne(query, { _id: 0 }, function (err, results) {
        if (err) throw error;
        res.json(results);
    });
}

function get_albums_by_user_id (req, res) {
    var id = req.params.id;
    var query = { userId: parseInt(id) };
    Albums.find(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
}

module.exports = { get_all_album, get_album_by_id, get_albums_by_user_id };