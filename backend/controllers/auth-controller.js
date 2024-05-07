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

  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      res.sendStatus(400).json({ message: "All fields are required" });
    }

    const [hashedOtp, expires] = hash.split(".");
    if (Date.now > expires) {
      res.status(400).json({ message: "OTP expired" });
    }

    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verfiyOtp(hashedOtp, data);
    if (!isValid) {
      res.sendStatus(400).json({ message: "Invalid OTP" });
    }
  }
}

module.exports = new AuthController();
//singlton pattern every we get same object not creation of new object whenever called
