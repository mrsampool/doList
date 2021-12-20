import {NextFunction, Request, Response, Router} from "express";
const controller = require('../controllers');
const groupRouter = require('./group');
const listRouter = Router({mergeParams: true});

process.env.NODE_ENV !== 'production' && listRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('List Router');
    console.log(req.path);
    next();
});

listRouter.get('/', controller.list.getByUser);
listRouter.post('/', controller.list.addList);
listRouter.use('/:listId/group', groupRouter);

// TODO: listRouter.get('/:listId')
// TODO: listRouter.put('/:listId')
// TODO: listRouter.delete('/:listId')

module.exports = listRouter;