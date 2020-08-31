// requirements
const express = require('express');
const cors = require('cors');

// declarations
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
  res.send(req.body);
});

// Server port
app.listen(3000, () => {
  console.log('Server start on port 3000');
});
