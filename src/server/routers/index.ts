import {Router} from 'express';
const apiRouter = Router();
const userRouter = require('./user');

apiRouter.use('/user', userRouter);

module.exports = apiRouter;
