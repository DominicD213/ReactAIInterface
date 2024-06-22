const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes'); // Adjust the path as needed
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/', routes);

mongoose.connect(process.env.DB_URI)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(`DB Connection Error: ${err}`));

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from DB');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is active on port ${port}`);
});
