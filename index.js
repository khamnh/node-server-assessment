var express = require("express");
var app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
var config = require('./config/config');
var mongoose = require('mongoose');
require('./app/models');

mongoose.Promise = global.Promise;
mongoose.connect(config.url, { useNewUrlParser: true }).then(() => {
    console.log('Connect to database successfully');
}).catch((error) => {
    console.log('Could not connect to database. Exiting now...');
    process.exit();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/', require('./app/routes'));

const port = process.env.PORT || 3000;
console.log("***************** Server listening on port %d *****************", port);
app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + 'not found'});
});