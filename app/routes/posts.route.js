var router = require('express').Router();

const post_controllers = require('../controllers/posts.controller');
const comment_controllers = require('../controllers/comments.controller');

router.get('/', post_controllers.get_all_post);

router.get('/:id', post_controllers.get_post_by_id);

router.get('/:id/comments', comment_controllers.get_comments_by_post_id);

router.post('/', post_controllers.create_new_post);

router.put('/:id', post_controllers.update_post);

router.delete('/:id', post_controllers.remove_post);

module.exports = router;