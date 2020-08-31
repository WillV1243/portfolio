// requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// modules
const transporter = require('./config/transporter');

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
app.post('/api/ContactForm', async (req, res) => {
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
      message: 'Something went wrong. Try again later',
      response: info.response
    });
  }
});

async function startServer() {
  // Server port
  app.listen(process.env.PORT, error => {
    if (error) {
      console.log('Server start error:', { error });
    } else {
      console.log(`Server start on port ${process.env.PORT}`);
    }
  });
}

startServer();
