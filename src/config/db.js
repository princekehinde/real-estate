const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let mongoUrl = null;

const mongoConnection = () => {
  if (process.env.NODE_ENV === "prince_real") {
    mongoUrl = TEST_DB || "mongodb://localhost:27017";
  } else {
    mongoUrl = process.env.LOCAL_DB;
  }
  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoConnection;