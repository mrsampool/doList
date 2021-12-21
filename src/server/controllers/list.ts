import {Request, Response} from "express";
import {Document} from "mongoose";
const model = require('../models/');

module.exports = {
    post: function addList(req: Request, res: Response){
        model.list.create(req.body.user, req.body.name)
            .then((data: Document) => res.send(data));
    },
    getByUser: function getListsByUser(req: Request, res: Response){
        console.log(req.params);
        model.list.findByUser(req.params.user)
            .then((data: Document[]) => res.send(data));
    }
};