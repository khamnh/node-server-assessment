var router = require('express').Router();

const comment_controllers = require('../controllers/comments.controller');

router.route('/').get(comment_controllers.get_all_comment);

router.route('/:id').get(comment_controllers.get_comment_by_id);

router.post('/', comment_controllers.create_new_comment);

router.put('/:id', comment_controllers.update_comment);

router.delete('/:id', comment_controllers.remove_comment);

module.exports = router;