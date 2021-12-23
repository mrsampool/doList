import {NextFunction, Request, Response, Router} from 'express';
const passport = require('passport');
const controller = require('../controllers');
const apiRouter = Router();
const userRouter = require('./user');

process.env.NODE_ENV !== 'production' && apiRouter.use((req: Request, res: Response, next: NextFunction) =>{
    console.log('API Router');
    console.log(req.path);
    next();
});

apiRouter.use('/user', userRouter);
apiRouter.post('/login', passport.authenticate('local', {}), controller.auth.login);
apiRouter.get('/logout', controller.auth.logout);
module.exports = apiRouter;
