var router = require('express').Router();

router.use('/users', require('./users.route'));

router.use('/albums', require('./albums.route'));

router.use('/photos', require('./photos.route'));

router.use('/posts', require('./posts.route'));

router.use('/todos', require('./todos.route'));

router.use('/comments', require('./comments.route'));

module.exports = router;