import {Request} from "express";
import {UserInterface} from "./UserInterface";

export interface AuthRequest extends Request{
    user: UserInterface,
    logout: Function
};