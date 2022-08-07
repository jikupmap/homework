require('dotenv').config();
const express = require('express');
const { connect } = require('./db.js');
const app = express();
const route = require('./route.js');

const { HOST, PORT } = process.env;

connect()

app.use('/', route);
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
