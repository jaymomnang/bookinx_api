'use strict';
var mongoose = require('mongoose'),
pricing = mongoose.model('pricing');

exports.list_all_prices = function(req, res) {
    pricing.find({}, function(err, seatpriceses) {
        if (err)
            res.send(err);
        res.json(seatpriceses);
    });
};

exports.create_prices = function(req, res) {
    var new_price = new pricing(req.body);
    
    new_price.save(function(err, new_prices) {
        if (err) {
            res.send(err);
            res.json(new_prices);
            console.log(new_prices);
        }
    });
};

exports.get_prices = function(req, res) {
    pricing.findById(req.params.price_id, function(err, prices) {
        if (err)
            res.send(err);
        res.json(prices);
    });
};

exports.update_prices = function(req, res) {
    pricing.findOneAndUpdate({ price_id: req.params.prices_id }, req.body, { new: true }, function(err, prices) {
        if (err)
            res.send(err);
        res.json(prices);
    });
};

exports.delete_prices = function(req, res) {
    pricing.remove({
        price_id: req.params.price_id
    }, function(err, rpt) {
        if (err)
            res.send(err);
        var message = 'prices successfully deleted';
        pricing.find({}, function(err, pricess) {
            if (err)
                res.send(err);
            res.json({ pricess, message });
        });
    });
};
