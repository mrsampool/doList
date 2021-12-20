import {NextFunction, Request, Response, Router} from 'express';
const controller = require('../controllers');
const itemRouter = Router({mergeParams: true});

process.env.NODE_ENV !== 'production' && itemRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('Item Router');
    console.log(req.path);
    next();
});

itemRouter.post('/:newItemName', controller.group.addGroup);

module.exports = itemRouter;