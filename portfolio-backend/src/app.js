// requirements
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// modules
const router = require('./routes/routes');

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
app.use('/api', router);

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
