var router = require('express').Router();

var photo_controllers = require('../controllers/photos.controller');

router.get('/', photo_controllers.get_all_photo);

router.get('/:id', photo_controllers.get_photo_by_id);

module.exports = router;