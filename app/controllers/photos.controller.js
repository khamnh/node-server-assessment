'use strict';
var mongoose = require('mongoose');
var Photos = mongoose.model('photos');

function get_all_photo(req, res) {
    Photos.find({}, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function get_photo_by_id(req, res) {
    var id = req.params.id;
    var query = { id: parseInt(id) };
    Photos.findOne(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

function get_photos_by_albums_id (req, res) {
    var id = req.params.id;
    var query = { albumId: parseInt(id) };
    Photos.find(query, { _id: 0 }, function (err, results) {
        if (err) throw err;
        res.end(JSON.stringify(results));
    });
}

module.exports = { get_all_photo, get_photo_by_id, get_photos_by_albums_id };