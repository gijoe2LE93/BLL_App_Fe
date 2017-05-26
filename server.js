var express     = require('express');
var app         = express();
var port        =  process.env.PORT || 8000;
var bodyParser = require('body-parser');



app.use(express.static('public'));
app.use(bodyParser.json());


app.listen(port, function() {
    console.log("BLL app is listening in port " + port);
});
