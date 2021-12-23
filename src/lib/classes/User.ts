export class User {
    _id?: string | undefined;
    email: string;
    password?: string;
    firstName?: string;
    lastName?: string;

    constructor(
        email?: string,
        password?: string,
        firstName?: string,
        lastName?: string,
        id?: string
        ) {
        this.email = email || '';
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.password = password || '';
        if (id) {
            this._id = id;
        }
    }
}
