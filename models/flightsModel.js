'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    flight: {
        type: String,
        Required: 'Kindly enter the flight number'
    },
    vehicle_model: {
        type: String,
        Required: 'Kindly enter model of the vehicle'
    },
    vehicle_reg_no: {
        type: String,
        Required: 'Kindly enter license number of the vehicle'
    },
    last_service_date: {
        type: Date,
        default: Date.now
    },
    departure_port: {
        type: String,
        default: ""
    },
    departure_date: {
        type: Date
    },
    departure_time: {
        type: String
    },
    arrival_port: {
        type: String,
        default: ""
    },
    arrival_date: {
        type: Date
    },
    arrival_time: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'on-time', 'delayed', 'departed', 'arrived']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('flights', flightSchema);