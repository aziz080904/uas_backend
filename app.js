// import express dan router
const express = require("express");
const router = require("./routes/api.js");

require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const alumniRoutes = require('./routes/api');

const app = express();
const PORT = process.env.APP_PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/', alumniRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
