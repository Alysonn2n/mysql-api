const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const protocol = process.env.PROTOCOL || 'http';
const ip = require('ip').address();
const port = process.env.PORT || 3001;

//endpoint
require('./routes/routes')(app);

app.listen(port, () => {
    console.log(`server started in http://localhost:${port} or ${protocol}://${ip}:${port} `)
})