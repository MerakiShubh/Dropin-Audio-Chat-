const otpService = require("../services/otp-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      return res.sendStatus(400);
    }

    const otp = await otpService.generateOtp();

    res.json({ otp: otp });
  }
}

module.exports = new AuthController();
//singlton pattern every we get same object not creation of new object whenever called
