import {Request, Response} from "express";
import {Document} from "mongoose";
const model = require('../models/');

module.exports = {
    create: function createUser(req: Request, res: Response){
        model.user.create(req.body)
            .then(() => res.sendStatus(200))
            .catch((err: Error) => res.status(500).send(err));
    },
    post: function addList(req: Request, res: Response){
        model.list.create(req.body.user, req.body.name)
            .then((data: Document) => res.send(data));
    },
};