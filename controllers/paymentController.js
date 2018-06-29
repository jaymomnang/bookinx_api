'use strict';
var mongoose = require('mongoose'),
    //schema = mongoose.Schema,
    payment = mongoose.model('payments');

exports.list_all_payments = function(req, res) {
    payment.find({}, function(err, payments) {
        if (err)
            res.send(err);
        res.json(payments);
    });
};

exports.create_payment = function(req, res) {
    var new_payment = new payments(req.body);
    new_payment.save(function(err, new_payment) {
        if (err) {
            res.send(err);
            res.json(new_payment);
        }
    });
};

exports.get_payment = function(req, res) {
    payment.findById(req.params.payment_id, function(err, payment) {
        if (err)
            res.send(err);
        res.json(payment);
    });
};

exports.update_payment = function(req, res) {
    payment.findOneAndUpdate({ payment_id: req.params.payment_id }, req.body, { new: true }, function(err, payment) {
        if (err)
            res.send(err);
        res.json(payment);
    });
};

exports.delete_payment = function(req, res) {
    payment.remove({
        payments_id: req.params.payment_id
    }, function(err, qts) {
        if (err)
            res.send(err);
        var message = 'quotation successfully deleted';
        payment.find({}, function(err, payments) {
            if (err)
                res.send(err);
            res.json({ payments, message });
        });
    });
};