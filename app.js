var express = require('express'),
app = express(),
path = require('path');

app.use(express.static('public'))


app.get('/', function (req,res ) {
    res.sendFile(__dirname + '/sites/' + 'landing.html');
})

app.get('/*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    res.status(404).sendFile(__dirname + '/sites/' + '404.html');
    res.status(401).sendFile(__dirname + '/sites/' + 'landing.html');
    res.status(403).sendFile(__dirname + '/sites/' + 'landing.html');
})

app.listen('80')
