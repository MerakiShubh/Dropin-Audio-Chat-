const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const UserService = require("../services/user-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
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
    if (Date.now > +expires) {
      res.status(400).json({ message: "OTP expired" });
    }

    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verfiyOtp(hashedOtp, data);
    if (!isValid) {
      res.sendStatus(400).json({ message: "Invalid OTP" });
    }
    let user;
    // let accessToken;
    // let refreshToken;
    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "DB error" });
    }

    //token
    const { accessToken, refreshToken } = tokenService.generateTokens({
      _id: user._id,
      activated: false,
    });
    res.cookie("refreshToken", refreshToken, {
      masAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.json({ accessToken });
  }
}

module.exports = new AuthController();
//singlton pattern every we get same object not creation of new object whenever called
