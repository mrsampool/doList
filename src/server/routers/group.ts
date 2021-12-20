import {NextFunction, Request, Response, Router} from 'express';
const controller = require('../controllers');
const groupRouter = Router({mergeParams: true});

process.env.NODE_ENV !== 'production' && groupRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('Group Router');
    console.log(req.path);
    next();
});

groupRouter.post('/', controller.group.addGroup)

module.exports = groupRouter;