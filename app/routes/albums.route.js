var router = require('express').Router();

var album_controllers = require('../controllers/albums.controller');
var photo_controllers = require('../controllers/photos.controller');

router.get('/', album_controllers.get_all_album);

router.get('/:id', album_controllers.get_album_by_id);

router.get('/:id/photos', photo_controllers.get_photos_by_albums_id);

module.exports = router;