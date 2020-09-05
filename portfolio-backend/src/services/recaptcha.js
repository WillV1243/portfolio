// requirements
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// models
const schemas = require('../models/schemas');
/* --------------------------------------------------------------------------------- */

class RecaptchaService {

  recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}`;

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

  }

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

  }

}

module.exports = RecaptchaService;
