import {NextFunction, Request, Response, Router} from 'express';
const controller = require('../controllers');
const itemRouter = require('./item');
const groupRouter = Router({mergeParams: true});

process.env.NODE_ENV !== 'production' && groupRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('Group Router');
    console.log(req.path);
    next();
});

groupRouter.post('/:newGroupName', controller.group.addGroup);
groupRouter.post('/:groupId/item', itemRouter);

module.exports = groupRouter;