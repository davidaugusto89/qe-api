require('dotenv').config();
const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");

const app = express();
app.use(cors());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// adding Helmet to enhance your API's security
app.use(helmet());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// adding express-rate-limit
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 60,
  })
);

const db = require("./app/models");

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to QE-API CRUD application." });
});

require("./app/routes/cadastros.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Export the Express API
module.exports = app;