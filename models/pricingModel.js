'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pricingSchema = new Schema({
    price_id: {
        type: String,
        Required: 'Kindly enter the price_id'
    },
    description: {
        type: String,
        Required: 'Kindly enter name'
    },
    departure_port: {
        type: String
    },
    destination: {
        type: String
    },
    pricing: {
        seatClass: {
            type: String
        },
        non_resident_price: {
            type: Number
        },
        resident_price: {
            type: Number
        }
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive']
        }],
        default: ['active']
    }
});

module.exports = mongoose.model('pricing', pricingSchema);
