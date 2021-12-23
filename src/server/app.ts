// Libraries / Modules
import * as express from "express";
const passport = require('passport');
const path = require('path');
const apiRouter = require('./routers');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client')));
require('./authenticate')();
require('dotenv').config();

/*
app.use(
    session({
        store: new PgSession({ pool }),
        secret: 'my secret',
        resave: false,
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    }),
);
*/
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

process.env.NODE_ENV !== 'production' && app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}:`);
    console.log(req.body);
    next();
})

app.use('/api', apiRouter);
module.exports = app;