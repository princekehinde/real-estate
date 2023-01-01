const Joi = require("joi");
const { successResponse, errorResponse } = require("../utils/response.js");

class realtorValidator {
  static async registerAndLoginForm(req, res, next) {
    try {
      const registerAndLoginFormSchema = Joi.object().keys({
        firstname:Joi.string(),
      secondname:Joi.string(),
      lastname:Joi.string(),
      username:Joi.string(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
      });

      await registerAndLoginFormSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      return errorResponse(res, 400, error.message);
    }
   }

   static async propertyForm(req, res, next) {
    try {
      const propertyFormSchema = Joi.object().keys({
            state:Joi.string(),
            city: Joi.string(),
            price: Joi.string(),
            Address:  Joi.string(),
      })

      await propertyFormSchema.validateAsync(req.body, {
        abortEarly: false,
      })
      next();
    }catch(error){
      return errorResponse(res, 400, error.message);
    }
   }
}
module.exports = realtorValidator;