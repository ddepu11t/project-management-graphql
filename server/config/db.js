const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = new mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
