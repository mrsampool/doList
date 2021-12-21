// Libraries / Modules
import * as express from "express";
const path = require('path');
const apiRouter = require('./routers');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.json());

process.env.NODE_ENV !== 'production' && app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}:`);
    console.log(req.body);
    next();
})

app.use('/api', apiRouter);
module.exports = app;