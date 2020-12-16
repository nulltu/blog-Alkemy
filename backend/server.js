const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require('./app/config/db.config');
const defaultPort = 8082

const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

//create table !noExists
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "API OK" });
});

require('./app/routes/post.routes')(app);


PORT = dbConfig.PORT || defaultPort;
// set port, listen for requests

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
