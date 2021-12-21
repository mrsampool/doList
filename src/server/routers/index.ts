import {NextFunction, Request, Response, Router} from 'express';
const apiRouter = Router();
const userRouter = require('./user');

process.env.NODE_ENV !== 'production' && apiRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('API Router');
    console.log(req.path);
    next();
});

apiRouter.use('/user', userRouter);
module.exports = apiRouter;
