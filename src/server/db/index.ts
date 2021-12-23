import * as mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/doList')
    .then(() => 'connected to MongoDB')
    .catch((err) => console.log(err));

module.exports = mongoose;