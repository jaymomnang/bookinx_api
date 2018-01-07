var express = require('express'),
    app = express(),
    port = process.env.PORT || 6000,
    mongoose = require('mongoose'),
    booking = require('./models/bookingModel'),
    flights = require('./models/flightsModel'),
    payments = require('./models/paymentModel'),
    customers = require('./models/customersModel'),
    schedules = require('./models/schedulesModel'),
    users = require('./models/usersModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const testdb = 'mongodb://localhost:27017/bookinxtzdb';
const livedb = 'mongodb://bookinxTZ:ferry1234@cluster0-shard-00-00-ktprc.mongodb.net:27017,cluster0-shard-00-01-ktprc.mongodb.net:27017,cluster0-shard-00-02-ktprc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(livedb);

console.log('preparing BookinxTZ server.........');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/aRoutes');
routes(app);

app.listen(port);
console.log('BookinxTZ server started on: ' + port);
