// requirements
const express = require('express');

// declarations
const router = express.Router();
/* --------------------------------------------------------------------------------- */

// routes
const postContactForm = async (req, res) => {
  console.log(req.body);
  
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: `[Mail sent from williamvandepeer.co.uk] ${req.body.name} from ${req.body.company}`,
      html: req.body.message
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(500).send({
          status: 500,
          success: false,
          message: 'Something went wrong. Try again later',
          response: info.response
        });
      } else {
        res.status(200).send({
          status: 200,
          success: true,
          message: 'Thanks for sending a message!',
          response: info.response
        });
      }
    })
  } catch (error) {
    res.status(500).send({
      status: 500,
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
};

router.route('/api/ContactForm').post(postContactForm);

module.exports = router;