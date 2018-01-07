'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
    payment_id: {
        type: String,
        Required: 'Kindly enter the quotes item'
    },
    booking_id: {
        type: String,
        Required: 'Kindly enter a description for the quotes'
    },
    quote_amount: {
        type: Number,
        default: 0.00
    },
    VAT: {
        type: Number,
        default: 0.00
    },
    customer: {
        _id: [{
            type: String,
            Required: ''
        }],
        _name: [{
            type: String,
            Required: 'Kindly enter customer name'
        }],
    },
    items: {
        product_id: {
            type: String
        },
        description: [{
            type: String
        }],
        amount: [{
            type: Number,
            default: 0.00
        }],
        qty: [{
            type: Number,
            default: 0.00
        }],
        total: [{
            type: Number,
            default: 0.00
        }],
        discount: [{
            type: Number,
            default: 0.00
        }],
        vat: [{
            type: Number,
            default: 0.00
        }],
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'invoiced']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('payments', paymentSchema);