// requirements
const router = require('express').Router();

// services
const ContactFormService = require('../services/contact');
const RecaptchaService = require('../services/recaptcha');

// declarations
const contactFormService = new ContactFormService;
const recaptchaService = new RecaptchaService;
/* --------------------------------------------------------------------------------- */

// routes
router.post('/ContactForm', contactFormService.handleContactForm);
router.post('/ValidateRecaptcha', recaptchaService.handleRecaptcha);

module.exports = router;
