// requirements
const router = require('express').Router();

// services
const handleContactForm = require('../services/contact');
/* --------------------------------------------------------------------------------- */

// routes
router.post('/ContactForm', handleContactForm);

module.exports = router;
