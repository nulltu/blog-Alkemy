const express = require('express');
const cors = require('cors');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();

require('./config/db');

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORTSERVER;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening in port ${PORT}`);
});
