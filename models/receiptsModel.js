'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receiptSchema = new Schema({
    receipt_id: {
        type: String,
        Required: 'Kindly enter the receipts item'
    },
    description: {
        type: String,
        Required: 'Kindly enter a description for the receipts'
    },
    receipt_amount: {
        type: Number,
        default: 0.00
    },
    VAT: {
        type: Number,
        default: 0.00
    },
    invoice_id: {
        type: String
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

module.exports = mongoose.model('receipts', receiptSchema);