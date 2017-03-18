var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')
var app = express()

app.use(cors());
app.use(bodyparser.json());

app.get('/', function (req, res) {
  res.send('You can pass a string as a parameter (example: "January 1, 2016" or "1451606400")');
})

app.get('/:date', function(req, res, next) {
    var date = req.params.date;
    var unix, natural;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    if((((date) * 10 )/10) == date) {
        // unix
        unix = date;
        var temp = new Date(date * 1000);
        natural =months[temp.getMonth()] + ' ' + temp.getDate() + ', ' + temp.getFullYear();
    } else {
        //natular
        var temp = new Date(date);
        natural = date;
        unix = temp.getTime()/ 1000;
    }
    res.json({"unix": unix, "natural": natural});
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})