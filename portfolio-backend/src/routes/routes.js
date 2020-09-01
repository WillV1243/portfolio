// requirements
const router = require('express').Router();

// services
const handleContactForm = require('../services/contact');
/* --------------------------------------------------------------------------------- */

// routes
const postContactForm = async (req, res) => {
  
  handleContactForm(req.body)
    .then(handledRes => {
      res.status(handledRes.status).send(handledRes);
    })
    .catch(err => {
      console.error(err);
    })

};

router.post('/ContactForm', postContactForm);

module.exports = router;
