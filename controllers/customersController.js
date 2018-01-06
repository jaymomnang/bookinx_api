'use strict';
var mongoose = require('mongoose'),
    //schema = mongoose.Schema,
    customer = mongoose.model('customers');

exports.list_all_customers = function(req, res) {
    customer.find({}, function(err, customers) {
        if (err)
            res.send(err);
        res.json(customers);
    });
};

exports.create_customer = function(req, res) {
    var new_customer = new customer(req.body);
    new_customer.save(function(err, new_customer) {
        if (err) {
            res.send(err);
            res.json(new_customer);
        }
    });
};

exports.get_customer = function(req, res) {
    customer.findById(req.params.customer_id, function(err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};

exports.update_customer = function(req, res) {
    customer.findOneAndUpdate({ customer_id: req.params.customerId }, req.body, { new: true }, function(err, customer) {
        if (err)
            res.send(err);
        res.json(customer);
    });
};

exports.delete_customer = function(req, res) {
    customer.remove({
        customer_id: req.params.customer_id
    }, function(err, cust) {
        if (err)
            res.send(err);
        var message = 'customer profile successfully deleted';
        customer.find({}, function(err, customers) {
            if (err)
                res.send(err);
            res.json({ customers, message });
        });
    });
};