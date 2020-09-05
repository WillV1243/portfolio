// requirements
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// models
const schemas = require('../models/schemas');
const StripRequestHTML = require('../services/stripHTML');

// declarations
const stripRequestHTML = new StripRequestHTML;
/* --------------------------------------------------------------------------------- */

class RecaptchaService {

  handleRecaptcha = async (req, res) => {

    const token = req.body;
    const secretKey = process.env.SECRET_KEY;

    const url =  `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${req.connection.remoteAddress}`
    
    if (!token) return res.status(400).send({ success: false, message: 'Recaptcha token empty' });

    axios.post(url)
      .then((response) => {
        console.log({ response });
        return res.status(200).send({ success: true, message: 'Recaptcha passed' });
      })
      .catch((err) => {
        return res.status(400).send({ success: false, message: 'Recaptcha failed' });
      })

  }

  /*
  handleContactForm = async (req, res) => {
    // strip request body of html + script
    const strippedBody = stripRequestHTML.stripBodyOfHTML(req.body);

    // schema for contact form request
    const { error } = schemas.contactFormSchema.validate(strippedBody);
    
    // if schema returns error send 400
    if (error) return res.status(400).send(error.details);
    
    // else handle request
    this.handleContactFormResponse(strippedBody)
      .then(handledRes => {
        return res.status(handledRes.status).send(handledRes);
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
*/
}

module.exports = RecaptchaService;
