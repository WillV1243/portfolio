// requirements
const axios = require('axios').default
const dotenv = require('dotenv');
dotenv.config();

// models
const transporter = require('../config/transporter');
const schemas = require('../models/schemas');
const StripRequestHTML = require('../services/stripHTML');

// declarations
const stripRequestHTML = new StripRequestHTML;
/* --------------------------------------------------------------------------------- */

class ContactFormService {

  recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}`;

  handleContactForm = async (req, res) => {
    // strip request body of html + script
    const strippedBody = stripRequestHTML.stripBodyOfHTML(req.body);

    // schema for contact form request
    const { error } = schemas.contactFormSchema.validate(strippedBody);
    
    // if schema returns error send 400
    if (error) return res.status(400).send(error.details);

    // recaptcha token + url for recaptch verify
    const token = strippedBody.recaptcha;
    const url =  `${this.recaptchaUrl}&response=${token}&remoteip=${req.connection.remoteAddress}`;

    // promise chain: axios recaptcha verify -> nodemailer send email -> send response to client
    axios.post(url)
      .then(recaptchaRes => recaptchaRes.data)
      .then(recaptchaData => {
        const success = recaptchaData && recaptchaData.success;
        const error = {
          status: 400,
          success: false,
          message: 'Recaptcha failed!',
          error: recaptchaData
        }

        if (success) {
          return this.handleContactFormResponse(strippedBody);
        } else {
          throw(error);
        }
      })
      .then(nodemailerRes => {
        const success = nodemailerRes && nodemailerRes.success;

        if (success) {
          return res.status(nodemailerRes.status).send(nodemailerRes);
        } else {
          throw(nodemailerRes);
        }
      })
      .catch(error => {
        return res.status(error.status ? error.status : 500).send(error)
      });
  
  };

  handleContactFormResponse = async (reqBody) => {
    // nodemailer options
    const mailOptions = {
      from: reqBody.email,
      to: process.env.EMAIL,
      subject: `[Mail sent from williamvandepeer.co.uk] ${reqBody.name} from ${reqBody.company}`,
      html: reqBody.message
    };
  
    // nodemailer method to send mail
    return transporter.sendMail(mailOptions)
      .then(res => {
        return {
          status: 200,
          success: true,
          message: 'Sending a message was successful!',
          response: res.response
        };
      })
      .catch(error => {
        return {
          status: 500,
          success: false,
          message: 'Nodemailer failed to send message',
          error: error
        };
      });
  
  };

}

module.exports = ContactFormService;
