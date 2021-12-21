import {GroupInterface} from "../interfaces/GroupInterface";

export class List {
  name: String;
  groups: GroupInterface[]|[];

  constructor(name?: String) {
    this.name = name || '';
    this.groups = []
  }
}