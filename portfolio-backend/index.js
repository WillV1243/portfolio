// requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// modules
const transporter = require('./config');

// declarations
dotenv.config();

const app = express();
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200
}
/* --------------------------------------------------------------------------------- */

app.use(express.json());
app.use(cors(corsOptions));

// POST contact form
app.post('/api/ContactForm', (req, res) => {
  console.log(req.body);
  
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: `[Mail sent from williamvandepeer.co.uk] ${req.body.name} from ${req.body.company}`,
      html: req.body.message
    };

    transporter.sendMail(mailOptions, (err, info) => {
      console.log({ err, info });
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for sending a message!'
        });
      }
    })
  } catch (error) {
    console.log({ error })
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});


// Server port
app.listen(3000, () => {
  console.log('Server start on port 3000');
});
