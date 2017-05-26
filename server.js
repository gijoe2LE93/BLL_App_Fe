var express     = require('express');
var app         = express();
var port        =  process.env.PORT || 8000;
var bodyParser = require('body-parser');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require controllers

// var userController = require('./controllers/userController');
// var eventController = require('./controllers/eventController');

// app.use('/user', userController);
// app.use('/event', eventController);


app.listen(port, function() {
    console.log("BLL app is listening in port " + port);
});
