const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDb Connected');
  } catch (err) {
    e => {
      console.error(e.message);
      process.exit(1);
    };
  }
};

module.exports = connectDB;
