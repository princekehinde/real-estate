const realtorManager = require("../modules/realtor-manager");
const {
  successResponse,
  errorResponse,
  loginSuccessResponse,
  paginationSuccessResponse,
} = require("../utils/response");

class realtorController {
  static async register(req, res) {
    try {
      const result = await realtorManager.register(req.body);

      if (result.statusCode === 400)
        return errorResponse(res, result.statusCode, result.message);

      return successResponse(
        res,
        result.statusCode,
        result.message,
        result.data
      );
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }

  static async login(req, res) {
    try {
      const result = await realtorManager.login(req.body);

      if (result.statusCode === 404 || result.statusCode === 400)
        return errorResponse(res, result.statusCode, result.message);

      return successResponse(
        res,
        result.statusCode,
        result.message,
        result.data
      );
    } catch (error) {
      return errorResponse(res, 500, error.message ,console.log(error));
    }
  }
  }
module.exports = realtorController;