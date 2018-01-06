'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        Required: 'Kindly enter your email address'
    },
    firstname: {
        type: String,
        Required: 'Kindly enter your firstname'
    },
    lastname: {
        type: String,
        Required: 'Kindly enter your lastname'
    },
    pwd: {
        type: String,
        Required: 'Kindly enter your password'
    },
    companyname: {
        type: String
    },
    business: {
        type: String
    },
    DateCreated: {
        type: Date,
        default: Date.now
    },
    lastLoginDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive', 'suspended']
        }],
        default: ['inactive']
    },
    role: {
        type: String,
        default: 'subscriberAdmin'
    },
    isActive: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Users', UserSchema);