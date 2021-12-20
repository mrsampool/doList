// Libraries / Modules
import * as express from "express";
const apiRouter = require('./routers');

const app = express();
app.use(express.json());

process.env.NODE_ENV !== 'production' && app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}:`);
    console.log(req.body);
    next();
})

app.use('/api', apiRouter);
module.exports = app;