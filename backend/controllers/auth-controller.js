const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      return res.sendStatus(400);
    }

    const otp = await otpService.generateOtp();

    const ttl = 1000 * 60 * 2; //2 min
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    try {
      await otpService.sendBySms(phone, otp);
      res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500).json({ message: "message sending failed" });
    }
  }
}

module.exports = new AuthController();
//singlton pattern every we get same object not creation of new object whenever called
