import {Router} from "express";
const listRouter = require('./list');
const userRouter = Router();

// TODO: userRouter.post('/');
// TODO: userRouter.get('/:userId');
userRouter.use('/:userId/list', listRouter);

module.exports = userRouter;