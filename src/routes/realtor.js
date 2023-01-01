const express = require("express");
const realtorValidator = require("./../validation/realtor");
const realtorController = require("../controllers/realtor");
const Middleware = require("../middleware/auth-middleware");

const router = express.Router();

router.post(
  "/register",
  realtorValidator.registerAndLoginForm,
  realtorController.register
);

router.post(
  "/login", 
  realtorValidator.registerAndLoginForm, 
  realtorController.login
);

router.post(
  "/property",
  realtorValidator.propertyForm,
  realtorController.property
)
module.exports = router;


