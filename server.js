const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

require('./api/routes')(app);

//Port Number
app.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});

module.exports = app;
