// Libraries / Modules
import * as express from "express";
const passport = require('passport');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const path = require('path');
const apiRouter = require('./routers');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client')));
//require('./authenticate')();
//require('dotenv').config();

const store = new MongoDBStore({
    uri: process.env.DATABASE_URL || 'mongodb://localhost/doList',
    collection: 'sessions'
});
store.on('error', (err: Error) => console.log(err));
app.use(
    session({
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
        secret: 'my secret',
        store: store,
        resave: true,
        saveUninitialized: true
    }),
);
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