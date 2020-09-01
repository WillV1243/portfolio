// requirements
const transporter = require('../config/transporter');
const dotenv = require('dotenv');

// declarations
dotenv.config();
/* --------------------------------------------------------------------------------- */

module.exports = async (reqBody) => {
  let res;

  const mailOptions = {
    from: reqBody.email,
    to: process.env.EMAIL,
    subject: `[Mail sent from williamvandepeer.co.uk] ${reqBody.name} from ${reqBody.company}`,
    html: reqBody.message
  };

  return transporter.sendMail(mailOptions)
    .then(mailRes => {
      res = {
        status: 200,
        success: true,
        message: 'Thanks for sending a message!',
        response: mailRes.response
      };
      console.log('sendMail called', mailRes);
      return res;
    })
    .catch(error => {
      res = {
        status: 500,
        success: false,
        message: 'Something went wrong. Try again later',
        error: error
      };
      console.log('sendMail catch', error);
      return res;
    });

};

