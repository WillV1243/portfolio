// requirements
const axios = require('axios');
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

    const token = strippedBody.recaptcha;
    const url =  `${this.recaptchaUrl}&response=${token}&remoteip=${req.connection.remoteAddress}`;

    this.handleRecaptchaResponse(url)
      .then(recaptchaRes => {
        console.log({ recaptchaRes });
        return res.status(200).send({ success: true })
/*
        if (recaptchaRes.success) {
          return this.handleContactFormResponse(strippedBody)
            .then(handledRes => {
              return res.status(handledRes.status).send(handledRes);
            })
            .catch(err => {
              return res.status(500).send(err)
            });
        }*/

      })
      .catch(err => {
        return res.status(500).send(err)
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
      .then(mailRes => {
        return {
          status: 200,
          success: true,
          message: 'Thanks for sending a message!',
          response: mailRes.response
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

  handleRecaptcha = async (req, res) => {
    // schema for contact form request
    const { error } = schemas.recaptchaSchema.validate(req.body);

    // if schema returns error send 400
    if (error) return res.status(400).send(error.details);

    const token = req.body.token;
    const url =  `${this.recaptchaUrl}&response=${token}&remoteip=${req.connection.remoteAddress}`;

    // else handle request
    this.handleRecaptchaResponse(url)
      .then(handledRes => {
        return res.status(handledRes.status).send(handledRes);
      })
      .catch(err => {
        console.log('handleRecaptchResponse error:', err)
        return res.status(500).send(err)
      });

  };

  handleRecaptchaResponse = async (url) => {

    return axios.post(url)
      .then(res => {
        return {
          status: 200,
          success: true,
          message: 'Recaptcha successfull!',
          response: res.data
        };
      })
      .catch(err => {
        return {
          status: 400,
          success: false,
          message: 'Recaptcha failed',
          error: err
        };
      })

  };

}

module.exports = ContactFormService;
