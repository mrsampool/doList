import {Router} from "express";
const controller = require('../controllers');
const listRouter = Router();

// TODO: listRouter.get('/')
listRouter.post('/', controller.list.addList);

// TODO: listRouter.get('/:listId')
// TODO: listRouter.put('/:listId')
// TODO: listRouter.delete('/:listId')

module.exports = listRouter;