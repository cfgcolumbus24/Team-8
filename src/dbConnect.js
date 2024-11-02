const mongoose = require('mongoose');

const connectDB = async () => {
  console.log("didfjf")
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to the database.');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;