// requirements
const transporter = require('../config/transporter');
const dotenv = require('dotenv');

// declarations
dotenv.config();
/* --------------------------------------------------------------------------------- */

const handleContactFormResponse = async (reqBody) => {
  const mailOptions = {
    from: reqBody.email,
    to: process.env.EMAIL,
    subject: `[Mail sent from williamvandepeer.co.uk] ${reqBody.name} from ${reqBody.company}`,
    html: reqBody.message
  };

  return transporter.sendMail(mailOptions)
    .then(mailRes => {
      console.log('sendMail called', mailRes);
      return {
        status: 200,
        success: true,
        message: 'Thanks for sending a message!',
        response: mailRes.response
      };
    })
    .catch(error => {
      console.log('sendMail catch', error);
      return {
        status: 500,
        success: false,
        message: 'Nodemailer failed. Try again later',
        error: error
      };
    });

};

const handleContactForm = async (req, res) => {
  
  handleContactFormResponse(req.body)
    .then(handledRes => {
      res.status(handledRes.status).send(handledRes);
    })
    .catch(err => {
      res.status(500).send(err);
    })

};

module.exports = handleContactForm;
