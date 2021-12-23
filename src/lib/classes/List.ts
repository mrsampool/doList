import {GroupInterface} from "../interfaces/GroupInterface";
import {ObjectId} from "mongoose";

export class List {
  _id?: ObjectId | string;
  name: string;
  user: string;
  groups: GroupInterface[]|[];

  constructor(name?: string, id?: string) {
    this.name = name || ''
    this.groups = [];
    this.user = '';
    if (id) {
      this._id = id;
    }
  }
}