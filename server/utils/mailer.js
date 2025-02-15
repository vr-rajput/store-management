const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // host: "smtp.ethereal.email",
  service: 'gmail',
  // host: "smtp.office365.com",
  auth: {
    user: "suraj2201kumar@gmail.com",
    pass: "frgj pyks bhnz eory"
    // user: "surajkumar2201@outlook.com",
    // pass: "upgxhwmhsbvakbck"
  }
})

const sendEmail = async (to, subject, text, html) => {
  try {
    const mailOptions = {
      from: 'suraj2201kumar@gmail.com',
      to,
      subject,
      text,
      html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
};

module.exports = sendEmail;