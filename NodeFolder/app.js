var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
const route = require('./routes/route');

var app = express();
const port = 3000;



app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017');

mongoose.connection.on('connected', () => {
    console.log("connection database successful");

});
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log("Error in connecting database" + err);
    }
});
app.use('/api', route);


app.get('/', (req, res) => {
    res.send('first response');
})


app.listen(port, () => {
    console.log("server started at port: " + port);
});


