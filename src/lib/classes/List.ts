import {GroupInterface} from "../interfaces/GroupInterface";
import {ObjectId} from "mongoose";

export class List {
  _id?: ObjectId | String;
  name: String;
  user: String;
  groups: GroupInterface[]|[];

  constructor(name?: String, id?: String) {
    this.name = name || ''
    this.groups = [];
    this.user = '';
    if (id) {
      this._id = id;
    }
  }
}