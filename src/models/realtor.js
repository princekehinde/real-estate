const mongoose = require("mongoose");

const realtorSchema = new mongoose.Schema(
  {
    firstname:{
        type: String,
        // required: true,
    },
    secondname:{
        type: String,
        // required: true,
    },
    lastname: {
        type: String,
        // required: true,
    },
    username: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    resetPasswordToken: {
      type: String,
    },  
state: {
            type: String,
          },
          city: {
            type: String,
          },
          price: {
            type: Number,
          },
          Address: {
            type: String,
          },
    no_of_tries: {
      default: 0,
      type: Number,
    },
  },
  { timestamps: true }
  );
  
  module.exports = mongoose.model("realtor", realtorSchema);