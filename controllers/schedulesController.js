'use strict';
var mongoose = require('mongoose'),
    //schema = mongoose.Schema,
    schedules = mongoose.model('schedules');

exports.list_all_schedules = function(req, res) {
    schedules.find({}, function(err, schedules) {
        if (err)
            res.send(err);
        res.json(schedules);
    });
};

exports.create_schedule = function(req, res) {
    var new_schedule = new schedules(req.body);
    new_schedule.save(function(err, new_schedule) {
        if (err) {
            res.send(err);
            res.json(new_schedule);
        }
    });
};

exports.get_schedule = function(req, res) {
    schedules.findById(req.params.schedule_id, function(err, schedule) {
        if (err)
            res.send(err);
        res.json(schedule);
    });
};

exports.update_schedule = function(req, res) {
    schedules.findOneAndUpdate({ schedule_id: req.params.scheduleId }, req.body, { new: true }, function(err, schedule) {
        if (err)
            res.send(err);
        res.json(schedule);
    });
};

exports.delete_schedule = function(req, res) {
    schedules.remove({
        schedule_id: req.params.schedule_id
    }, function(err, prd) {
        if (err)
            res.send(err);
        var message = 'schedule successfully deleted';
        schedules.find({}, function(err, schedules) {
            if (err)
                res.send(err);
            res.json({ schedules, message });
        });
    });
};
