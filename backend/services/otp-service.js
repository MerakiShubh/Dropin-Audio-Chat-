const crypto = require("crypto");
const hashService = require("./hash-service");
const smssid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTHTOKEN;
const twilio = require("twilio")(smssid, smsAuthToken, {
  lazyLoading: true,
});
class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }
  async sendBySms(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: process.env.SMS_FROM_NUMBER,
      body: `Your dropin otp is ${otp}`,
    });
  }
  verfiyOtp(hashedOtp, data) {
    let computedHash = hashService.hashOtp(data);
    return computedHash === hashedOtp;
  }
}

module.exports = new OtpService();
