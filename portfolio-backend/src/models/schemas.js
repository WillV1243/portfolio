// requirements
const joi = require('joi');
/* --------------------------------------------------------------------------------- */

const contactFormSchema = joi.object({
  name: joi.string().required(),
  company: joi.string().required(),
  email: joi.string().required().email(),
  message: joi.string().required().max(4000),
  recaptcha: joi.string.required()
})

module.exports = { contactFormSchema };
