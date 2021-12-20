import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/doList')
    .then(() => 'connected to MongoDB')
    .catch((err) => console.log(err));

module.exports = mongoose;