import {AuthRequest} from "../../lib/interfaces/AuthRequest";
import {Response} from "express";

module.exports = {
    login: function logIn(req: AuthRequest, res: Response){
        delete req.user.password;
        const { _id, firstName, lastName, email } = req.user;
        console.log(req.user);
        res.send({ user: { _id, firstName, lastName, email } });
    },
    logout: function logOut(req: AuthRequest, res: Response){
        req.logout();
        res.sendStatus(201);
    }
};