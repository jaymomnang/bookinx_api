'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookingSchema = new Schema({
    booking_id: {
        type: String,
        Required: 'Kindly enter the booking reference'
    },
    flight: {
        type: String,
        Required: 'Kindly enter the flight/vessel no'
    },
    price: {
        type: Number,
        default: 0.00
    },
    departure_port: {
        type: String,
        Required: 'Kindly enter the departure port'
    },
    departure_date: {
        type: Date,
        default: Date.now
    },
    departure_time: {
        type: String,
        default: "0:00"
    },
    destination: {
        type: String,
        Required: 'Kindly enter the destination'
    },
    available_seats: {
        type: Number,
        default: 0.00
    },
    booked_seats: {
        type: Number,
        default: 0.00
    },
    total_seats: {
        type: Number,
        default: 0.00
    },    
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'invoiced', 'paid']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('invoices', bookingSchema);
