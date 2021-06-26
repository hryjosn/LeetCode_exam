var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prettyfaceowner@gmail.com",
    pass: "hpyqaerwxzftfhqn",
  },
});

const mailOptions = {
  from: "prettyfaceowner@gmail.com",
  to: "jo74705@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail({ ...mailOptions }, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
