import {Request, Response} from "express";
import {Document} from "mongoose";

const model = require('../models/list');

module.exports = {
    getByUser: function getListsByUser(req: Request, res: Response){
        console.log(req.params);
        model.findByUser(req.params.user)
            .then((data: Document[]) => res.send(data));
    },
    addList: function addList(req: Request, res: Response){
        model.create(req.body.user, req.body.name)
            .then((data: Document) => res.send(data));
    }
};