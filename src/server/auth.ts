const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
import {UserInterface} from "../lib/interfaces/UserInterface";

const users = require('./models/user');

module.exports = () => {
    passport.use(
        new LocalStrategy(
            { usernameField: 'email', passwordField: 'password' },
            (email: String, password: String, done: Function) => {
                users.find(email)
                    .then((user: UserInterface) => {
                        if (!user) { return done(null, false); }
                        bcrypt.compare(password, user.password)
                            .then((result: boolean) => {
                                if (result) { done(null, user);
                                } else { done(null, false); }
                            })
                            .catch(() => done(null, false));
                    }).catch((err: Error) => done(err));
            },
        ),
    );
    passport.serializeUser((user: UserInterface, done: Function) => {
        done(null, user);
    });

    passport.deserializeUser((user: UserInterface, done: Function) => {
        done(null, user);
    });
};
