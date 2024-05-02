'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());

// Enable CORS with specific options
app.use(cors());

// Routes
app.use('/api', router);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
