// requirements
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// declarations
dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});
/* --------------------------------------------------------------------------------- */

module.exports = transporter;
