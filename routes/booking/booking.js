const router = require("express").Router();
const { userBookingModel, homeAgencyModel } = require("../../userdbSchema");
const nodemailer = require("nodemailer");
const cache = require("../../middlewares/catch");
const { isAuthenticated } = require("../../middlewares/auth");
router.post(
  "/booking/:infoId",
  isAuthenticated,
  cache("5 minutes"),
  async (req, res) => {
    let infoId = req.params.infoId;
    let userId = req.session.userId;
    let { name, email, phoneNum, propAddress, dateTime, message, agreement } =
      req.body;
    let bookingData = await homeAgencyModel.findOne({ _id: infoId });

    let data = new userBookingModel({
      userId: userId,
      propertyId: infoId,
      name: name,
      email: email,
      phoneNum: phoneNum,
      propAddress: propAddress,
      dateTime: dateTime,
      message: message,
      agreement: agreement,
    });
    try {
      await data.save();

      // Send email
      const transporter = nodemailer.createTransport({
        service: "gmail", // Aapka email service provider
        auth: {
          user: "zainabro886@gmail.com", // Aapka email
          pass: "zcge ndtx dqtx owdd", // Aapka email password
        },
      });

      const messages = [
        "Your booking is confirmed!",
        "Thank you for booking with us!",
        "We're excited to see you soon!",
      ];
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      const mailOptions = {
        from: "zainabro886@gmail.com",
        to: req.body.email,
        subject: "Booking Confirmation",
        text: `Thank you, ${req.body.name}! ${randomMessage} for ${req.body.dateTime}.`,
      };

      const ownerEmail = {
        from: "zainabro886@gmail.com",
        to: bookingData.email,
        subject: "Booking Confirmation",
        text: `A new booking has been made for your property ${bookingData.propertyName}. Details: ... <br> ${bookingData.discription}`,
      };

      await transporter.sendMail(mailOptions);
      await transporter.sendMail(ownerEmail);
      req.flash("message", "Your Booking will be successfully sended");
      res.redirect(`/propertyinfo/${infoId}`);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error occurred while booking.");
    }
  }
);

module.exports = router;
