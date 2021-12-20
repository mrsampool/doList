import {NextFunction, Request, Response, Router} from "express";
const listRouter = require('./list');
const userRouter = Router();

process.env.NODE_ENV !== 'production' && userRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('User Router');
    console.log(req.path);
    next();
});

// TODO: userRouter.post('/');
// TODO: userRouter.get('/:userId');
userRouter.use('/:user/list', listRouter);

module.exports = userRouter;