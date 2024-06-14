const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes =  require('./routes/routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const corsOption = {
    origin: '*',
    credentials: true,
    optionSuccessSatus: 200,
};

app.use(cors(corsOption))
app.use('/', routes)


const port = 4000;
const server = app.listen(port, () => {
    console.log(`Server is active on port ${port}`)
})