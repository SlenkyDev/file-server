var express = require('express'),
app = express(),
path = require('path');

app.use(express.static('public'))


app.get('/', function (req,res ) {
    res.sendFile(__dirname + '/cat.jpg');
})

app.get('/*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    res.status(404).sendFile(__dirname + '/rip.jpg');
})

app.listen('81')