//npm init
//npm install express body-parser cors mongojs --save
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//How to connect to database:

//Run mongod 
//var db = mongoJS('birds', ['sightings']);
var db = mongojs('birds', ['sightings']);
//var port = [mongod port from cmd];
var port = 27017;

app.post('/api/sighting', function(req, res){
    console.log('post hit');
    res.end();
})
app.get('/api/sighting', function(req, res){
    console.log('get hit');
    res.end();
})
app.delete('/api/sighting', function(req, res){
    console.log('delete hit');
    res.end();
})
app.put('/api/sighting', function(req, res){
    console.log('put hit');
    res.end();
})


app.listen(3000, function(){
    
});