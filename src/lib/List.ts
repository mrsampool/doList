import {GroupInterface} from "../server/db/schemas/group";

export class List {
  name: String;
  groups: GroupInterface[]|[];

  constructor(name?: String) {
    this.name = name || '';
    this.groups = []
  }
}