var express = require('express'),
    app = express(),
    port = process.env.PORT || 6000,
    mongoose = require('mongoose'),
    booking = require('./models/bookingModel'),
    Vessels = require('./models/VesselsModel'),
    payments = require('./models/paymentModel'),
    customers = require('./models/customersModel'),
    schedules = require('./models/schedulesModel'),
    seatClass = require('./models/seatClassModel'),
    ports = require('./models/portsModel'),
    pricing = require('./models/pricingModel'),
    users = require('./models/usersModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const testdb = 'mongodb://localhost:27017/bxdb';
const livedb = 'mongodb://bookinxTZ:ferry1234@cluster0-shard-00-00-ktprc.mongodb.net:27017,cluster0-shard-00-01-ktprc.mongodb.net:27017,cluster0-shard-00-02-ktprc.mongodb.net:27017/bxdb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(livedb);

//internally generated numbers for attendance records.
global.getNewID = function (currentID, prefix) {
    var pos = Number(currentID.substring(3, 10)) + 1;
    var l = pos.toString().length;
    var nxt = prefix;

    for (var i = 0; i + l < 7; i++) {
        nxt = nxt + "0";
    }

    return nxt + pos.toString();
};

console.log('Loading Bookinx Server.........');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/aRoutes');
routes(app);

app.listen(port);
console.log('Bookinx server started on: ' + port);
