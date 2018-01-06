'use strict';
var mongoose = require('mongoose'),
    //schema = mongoose.Schema,
    quote = mongoose.model('quotes');

exports.list_all_quotes = function(req, res) {
    quote.find({}, function(err, quotes) {
        if (err)
            res.send(err);
        res.json(quotes);
    });
};

exports.create_quote = function(req, res) {
    var new_quote = new quotes(req.body);
    new_quote.save(function(err, new_quote) {
        if (err) {
            res.send(err);
            res.json(new_quote);
        }
    });
};

exports.get_quote = function(req, res) {
    quote.findById(req.params.quote_id, function(err, quote) {
        if (err)
            res.send(err);
        res.json(quote);
    });
};

exports.update_quote = function(req, res) {
    quote.findOneAndUpdate({ quote_id: req.params.quote_id }, req.body, { new: true }, function(err, quote) {
        if (err)
            res.send(err);
        res.json(quote);
    });
};

exports.delete_quote = function(req, res) {
    quote.remove({
        quotes_id: req.params.quote_id
    }, function(err, qts) {
        if (err)
            res.send(err);
        var message = 'quotation successfully deleted';
        quote.find({}, function(err, quotes) {
            if (err)
                res.send(err);
            res.json({ quotes, message });
        });
    });
};