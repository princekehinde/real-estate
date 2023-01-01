const bcrypt = require("bcryptjs");
const jwt = require("./../utils/jwt");
const RealtorModel = require("./../models/realtor");
const EmailService = require("../utils/node-mailer");

class realtorManager {
  constructor() {}


  static realtorResponse = (data) => {
    return {
      email: data.email,
      username: data.username,
      id: data.id,
    };
  };

  /**
   * @param {string} username the username of the user
   * @param {string} email the email of the user
   * @param {string} password the password of the user
   */

  static async register(data) {
    try {
      const { email, userName, password } = data;

    //   const user = await UserModel.findOne({
    //     $or: [
    //       { email: email },
    //       { username: userName},
    //     ],
    //   });

    //   if (user)
    //     return {
    //       statusCode: 400,
    //       message: "User already exists",
    //     };

      const hashPassword = await bcrypt.hashSync(password, 10);

      const createrealtor = await RealtorModel.create({
        email: email,
        username: userName,
        password: hashPassword,
      });

      return {
        statusCode: 200,
        message: "realtor created successfully",
        data: await realtorManager.realtorResponse(createrealtor),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @description - This method is used to login a user
   * @param {object} data - The data of the user
   * @returns {object} - The response of the user
   */
  static async login(data) {
    const { email, password } = data;
    const realtor = await RealtorModel.findOne({ email: email.toLowerCase() });
    if (!realtor)
      return {
        statusCode: 404,
        message: "realtor not found",
      };

    const isPasswordValid = await bcrypt.compareSync(password, realtor.password);
    if (!isPasswordValid)
      return {
        statusCode: 401,
        message: "Invalid password",
      };

    const token = await jwt.generateToken(realtor);
    return {
      statusCode: 200,
      message: "Login successful",
      data: {
        token,
        realtor: await realtorManager.realtorResponse(realtor),
      },
    };
  }

    /**
   * @description - This method is used to login a user
   * @param {object} data - The data of the user
   * @returns {object} - The response of the user
   */
  static async property(data) {
    try {
      const { state, city, price, Address, } = data;

      // const realtor = await RealtorModel.findOne({
      //   $or: [
      //     {property: property},
      //   ],
      // });

      // if (realtor)
      //   return {
      //     statusCode: 400,
      //     message: "property already exists",
      //   };


      const createrealtor = await RealtorModel.create({
        state: state,
        city: city,
        price: price,
        Address: Address
      });

      return {
        statusCode: 200,
        message: "property created successfully",
        data: await realtorManager.realtorResponse(createrealtor),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

}

module.exports = realtorManager;