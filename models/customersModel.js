'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new Schema({
    customer_id: {
        type: String,
        Required: 'Kindly enter the customerId'
    },
    firstname: {
        type: String,
        Required: 'Kindly enter customer firstname'
    },
    lastname: {
        type: String,
        Required: 'Kindly enter customer lastname'
    },
    phone_no: {
        type: String,
        Required: 'Kindly enter customer phone number'
    },
    email: {
        type: String,
        Required: 'Kindly enter customer email address'
    },
    HasAccount: {
        type: Boolean,
        Required: false
    },
    pwd: {
        type: String
    },
    nationality: {
        type: String,
        Required: 'Kindly enter customer nationality'
    },
    govt_id_no: {
        type: String
    },
    gender: {
        type: String,
        Required: 'Kindly enter customer gender'
    },
    address: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'suspended', 'inactive']
        }],
        default: ['active']
    }
});

module.exports = mongoose.model('customers', customerSchema);