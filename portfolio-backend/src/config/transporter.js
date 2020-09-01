// requirements
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// declarations
dotenv.config();
/* --------------------------------------------------------------------------------- */

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

module.exports = transporter;
