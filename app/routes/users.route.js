'use strict';
var router = require('express').Router();

const user_controllers = require('../controllers/users.controller');
const album_controllers = require('../controllers/albums.controller');
const todo_controllers = require('../controllers/todos.controller');
const post_controllers = require('../controllers/posts.controller');

router.get('/', user_controllers.get_all_user);

router.get('/:id', user_controllers.get_user_by_id);

router.get('/:id/albums', album_controllers.get_albums_by_user_id);

router.get('/:id/todos', todo_controllers.get_todos_by_user_id);

router.get('/:id/posts', post_controllers.get_posts_by_user_id);

router.post('/', user_controllers.create_new_user);

router.put('/:id', user_controllers.update_user);

router.delete('/:id', user_controllers.remove_user);

module.exports = router;