//requires
var express = require( 'express');
var app = express();
var path = require('path');

//uses
app.use( express.static('public'));


//listen
app.listen( 5678, function(){
    console.log( 'server is up on 5678');
});

//base URL
app.get( '/', function(req, res){
  console.log('base url hit');
  //send file at resolved path
  res.sendFile(path.resolve('views/index.html'));
});//end base URL
