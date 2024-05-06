const authController = require("./controllers/auth-controller");

const router = require("express").Router();

router.post("/api/send-otp", authController.sendOtp);

module.exports = router;
