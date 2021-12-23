import {Request, Response} from "express";
import {Document} from "mongoose";
import {AuthRequest} from "../../lib/interfaces/AuthRequest";
import {UserInterface} from "../../lib/interfaces/UserInterface";
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
    getCurrent: function getCurrentUser(req: AuthRequest, res: Response){
        if (req.user && req.user._id) {
            console.log(req.user);
            model.user.findById(req.user._id)
                .then((dbUser: UserInterface) => {
                    let { _id, firstName, lastName, email } = dbUser;
                    res.json({ user: { _id, firstName, lastName, email} });
                });
            // res.json({ user: req.user });
        } else {
            res.status(200).send();
        }
    }
};