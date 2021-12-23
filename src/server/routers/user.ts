import {NextFunction, Request, Response, Router} from "express";
const controller = require('../controllers');
const listRouter = require('./list');
const userRouter = Router();

process.env.NODE_ENV !== 'production' && userRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('User Router');
    console.log(req.path);
    next();
});

userRouter.post('/', controller.user.create);
userRouter.get('/current/', controller.user.getCurrent);
// TODO: userRouter.get('/:userId');
userRouter.use('/:user/list', listRouter);

module.exports = userRouter;