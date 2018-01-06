'use strict';
var mongoose = require('mongoose'),
    receipt = mongoose.model('receipts');

exports.list_all_receipts = function(req, res) {
    receipt.find({}, function(err, receipts) {
        if (err)
            res.send(err);
        res.json(receipts);
    });
};

exports.create_receipt = function(req, res) {
    var new_receipt = new receipt(req.body);
    new_receipt.save(function(err, new_receipt) {
        if (err) {
            res.send(err);
            res.json(new_receipt);
        }
    });
};

exports.get_receipt = function(req, res) {
    receipt.findById(req.params.receipt_id, function(err, receipt) {
        if (err)
            res.send(err);
        res.json(receipt);
    });
};

exports.update_receipt = function(req, res) {
    receipt.findOneAndUpdate({ receipt_id: req.params.receipt_id }, req.body, { new: true }, function(err, receipt) {
        if (err)
            res.send(err);
        res.json(receipt);
    });
};

exports.delete_receipt = function(req, res) {
    receipt.remove({
        receipt_id: req.params.receipt_id
    }, function(err, rpt) {
        if (err)
            res.send(err);
        var message = 'Receipt successfully deleted';
        receipt.find({}, function(err, receipts) {
            if (err)
                res.send(err);
            res.json({ receipts, message });
        });
    });
};