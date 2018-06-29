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
    middlename: {
        type: String,
        Required: 'Kindly enter your middlename'
    },
    lastname: {
        type: String,
        Required: 'Kindly enter your lastname'
    },
    pwd: {
        type: String,
        Required: 'Kindly enter your password'
    },
    resident: {
        type: String
    },
    id_type: {
        type: String
    },
    id_no: {
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