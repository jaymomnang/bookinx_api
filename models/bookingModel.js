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
    passengers: {
        firstname: {
            type: String,
            Required: 'Kindly enter the first name'
        },
        lastname: {
            type: String,
            Required: 'Kindly enter the last name'
        },
        passport_no: {
            type: String,
            Required: 'Kindly enter the passport number'
        },
        isResident: {
            type: Boolean,
            default: false
        },
        permit_no: {
            type: String,
            Required: 'Kindly enter the residency permit number'
        }
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
    arrival_port: {
        type: String,
        Required: 'Kindly enter the destination'
    },
    arrival_date: {
        type: Date,
        default: Date.now
    },
    arrival_time: {
        type: String,
        default: "0:00"
    },
    booking_class: {
        type: String,
        default: "ECONOMY"
    },
    seat_no: {
        type: String,
        default: "A1"
    },
    isReturn: {
        type: Boolean,
        default: false
    },
    return_date: {
        type: Date,
        default: Date.now
    },
    return_time: {
        type: String,
        default: "0:00"
    },
    rt_seat_no: {
        type: String
    },
    rt_arrival_date: {
        type: Date,
        default: Date.now
    },
    rt_arrival_time: {
        type: String,
        default: "0:00"
    },        
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['adjusted', 'pending', 'partial', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('bookings', bookingSchema);
