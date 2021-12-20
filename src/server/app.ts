// Libraries / Modules
import express from "express";
const router = require('./routers');

const app = express();
app.use('/api', router);
module.exports = app;