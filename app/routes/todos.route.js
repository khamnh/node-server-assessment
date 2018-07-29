var router = require('express').Router();

const todo_controllers = require('../controllers/todos.controller');

router.get('/', todo_controllers.get_all_todo);

router.get('/:id', todo_controllers.get_todo_by_id);

module.exports = router;