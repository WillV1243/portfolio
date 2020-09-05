// requirements
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// modules
const router = require('./routes/routes');

// declarations
const app = express();
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200
}

// app declarations
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
/* --------------------------------------------------------------------------------- */

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
