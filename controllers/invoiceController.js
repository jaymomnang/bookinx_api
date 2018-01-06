'use strict';
var mongoose = require('mongoose'),
    //schema = mongoose.Schema,
    invoice = mongoose.model('invoices');

exports.list_all_invoices = function(req, res) {
    invoice.find({}, function(err, invoices) {
        if (err)
            res.send(err);
        res.json(invoices);
    });
};

exports.create_invoice = function(req, res) {
    var new_invoice = new invoice(req.body);
    new_invoice.save(function(err, new_invoice) {
        if (err) {
            res.send(err);
            res.json(new_invoice);
        }
    });
};

exports.get_invoice = function(req, res) {
    invoice.findById(req.params.invoice_id, function(err, invoice) {
        if (err)
            res.send(err);
        res.json(invoice);
    });
};

exports.update_invoice = function(req, res) {
    invoice.findOneAndUpdate({ invoice_id: req.params.invoice_id }, req.body, { new: true }, function(err, invoice) {
        if (err)
            res.send(err);
        res.json(invoice);
    });
};

exports.delete_invoice = function(req, res) {
    invoice.remove({
        invoice_id: req.params.invoice_id
    }, function(err, inv) {
        if (err)
            res.send(err);
        var message = 'Invoice successfully deleted';
        invoice.find({}, function(err, invoices) {
            if (err)
                res.send(err);
            res.json({ invoices, message });
        });
    });
};