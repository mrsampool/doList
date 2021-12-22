export class User {
    _id?: String | undefined;
    name?: String;

    constructor(name?: String, id?: String) {
        this.name = name || ''
        if (id) {
            this._id = id;
        }
    }
}
