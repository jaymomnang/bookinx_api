'use strict';
var mongoose = require('mongoose'),
    flight = mongoose.model('flights');

exports.list_all_flights = function(req, res) {
    flight.find({}, function(err, flights) {
        if (err)
            res.send(err);
        res.json(flights);
    });
};

exports.create_flight = function(req, res) {
    var new_flight = new flight(req.body);
    new_flight.save(function(err, new_flight) {
        if (err) {
            res.send(err);
            res.json(new_flight);
        }
    });
};

exports.get_flight = function(req, res) {
    flight.findById(req.params.flight_id, function(err, flight) {
        if (err)
            res.send(err);
        res.json(flight);
    });
};

exports.update_flight = function(req, res) {
    flight.findOneAndUpdate({ flight_id: req.params.flight_id }, req.body, { new: true }, function(err, flight) {
        if (err)
            res.send(err);
        res.json(flight);
    });
};

exports.delete_flight = function(req, res) {
    flight.remove({
        flight_id: req.params.flight_id
    }, function(err, rpt) {
        if (err)
            res.send(err);
        var message = 'flight successfully deleted';
        flight.find({}, function(err, flights) {
            if (err)
                res.send(err);
            res.json({ flights, message });
        });
    });
};