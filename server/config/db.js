const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});


const connectDB = async () => {
  try {
    // MongoDB connection URI
    const dbUsername = process.env.DB_USERNAME;
    const MONGODB_URI = "mongodb+srv://uditjha:naruto-kun@cluster0.z50ro.mongodb.net/TestApp?retryWrites=true&w=majority";
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the process with a failure status code
  }
};

module.exports = connectDB;