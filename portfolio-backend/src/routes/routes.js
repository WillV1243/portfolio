// requirements
const router = require('express').Router();

// services
const ContactFormService = require('../services/contact');

// declarations
const contactFormService = new ContactFormService;
/* --------------------------------------------------------------------------------- */

// routes
router.post('/ContactForm', contactFormService.handleContactForm);

module.exports = router;
