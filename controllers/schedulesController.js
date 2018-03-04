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
    

    schedules.findOne({}, 'schedule_id').sort({schedule_id: -1}).exec(function(error, data){
        if (error) res.send(error)
    
        var last_scheduleId = 'SCH0000000';
        if (data != null){
            last_scheduleId = data.schedule_id;
        }

        new_schedule.schedule_id = getNewtaskId(last_scheduleId);
        
        new_schedule.save(function(err, new_schedule) {
            if (err) {
                res.send(err);

                schedules.find({}, function(err, schedules) {
                    if (err)
                        res.send(err);
                    res.json(schedules);
                });
            }
        });
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

//internally generated numbers for attendance records.
var getNewtaskId = function(currentID){
    var pos = Number(currentID.substring(3,10)) + 1;
    var nxt = "SCH000000";
    switch(pos.toString().length) {
        case 2:
            nxt = "SCH00000" + pos.toString();
            break;
        case 3:
            nxt = "SCH0000" + pos.toString();
            break;
        case 4:
            nxt = "SCH000" + pos.toString();
            break;
        case 5:
            nxt = "SCH00" + pos.toString();
            break;
        case 6:
            nxt = "SCH0" + pos.toString();
            break;
        case 7:
            nxt = "SCH" + pos.toString();
            break;
        default:
            nxt = nxt + pos.toString();
  }
  return nxt;
};
