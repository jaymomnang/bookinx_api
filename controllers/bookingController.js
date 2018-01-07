'use strict';
var mongoose = require('mongoose'),
    //schema = mongoose.Schema,
    booking = mongoose.model('bookings');

exports.list_all_bookings = function(req, res) {
    booking.find({}, function(err, bookings) {
        if (err)
            res.send(err);
        res.json(bookings);
    });
};

exports.create_booking = function(req, res) {
    var new_booking = new booking(req.body);
    new_booking.save(function(err, new_booking) {
        if (err) {
            res.send(err);
            res.json(new_booking);
        }
    });
};

exports.get_booking = function(req, res) {
    booking.findById(req.params.booking_id, function(err, booking) {
        if (err)
            res.send(err);
        res.json(booking);
    });
};

exports.update_booking = function(req, res) {
    booking.findOneAndUpdate({ booking_id: req.params.booking_id }, req.body, { new: true }, function(err, booking) {
        if (err)
            res.send(err);
        res.json(booking);
    });
};

exports.delete_booking = function(req, res) {
    booking.remove({
        booking_id: req.params.booking_id
    }, function(err, inv) {
        if (err)
            res.send(err);
        var message = 'booking successfully deleted';
        booking.find({}, function(err, bookings) {
            if (err)
                res.send(err);
            res.json({ bookings, message });
        });
    });
};