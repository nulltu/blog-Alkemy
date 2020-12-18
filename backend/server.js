const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./src/routes/postRoutes');

const DEFAULTPORT = 8082;
dotenv.config();

const app = express();

require('./src/config/db');

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORTSERVER || DEFAULTPORT;

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
