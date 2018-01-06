'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schedulesSchema = new Schema({
    schedule_id: {
        type: String,
        Required: 'Kindly enter the schedule Id'
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
        default: 0
    },
    booked_seats: {
        type: Number,
        default: 0
    },
    total_seats: {
        type: Number,
        default: 0
    },    
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['departed', 'delayed', 'on-time']
        }],
        default: ['on-time']
    }
});

module.exports = mongoose.model('schedules', schedulesSchema);