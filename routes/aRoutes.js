'use strict';
module.exports = function(app) {
    var booking = require('../controllers/bookingController');
    var Vessels = require('../controllers/VesselsController');
    var schedules = require('../controllers/schedulesController');
    var customers = require('../controllers/customersController');
    var payments = require('../controllers/paymentController');
    var seatClass = require('../controllers/seatClassController');
    var users = require('../controllers/userController');

    // booking Routes
    app.route('/booking')
        .get(booking.list_all_bookings)
        .post(booking.create_booking);

    app.route('/booking/:booking_id')
        .get(booking.get_booking)
        .put(booking.update_booking)
        .delete(booking.delete_booking);

    // Vessels Routes
    app.route('/Vessel')
        .get(Vessels.list_all_Vessels)
        .post(Vessels.create_Vessel);

    app.route('/Vessel/:Vessel_id')
        .get(Vessels.get_Vessel)
        .put(Vessels.update_Vessel)
        .delete(Vessels.delete_Vessel);

    // Vessels Routes
    app.route('/class')
        .get(seatClass.list_all_classes)
        .post(seatClass.create_class);

    app.route('/class/:class_id')
        .get(seatClass.get_class)
        .put(seatClass.update_class)
        .delete(seatClass.delete_class);

    // payments Routes
    app.route('/payment')
        .get(payments.list_all_payments)
        .post(payments.create_payment);

    app.route('/payments/:payment_id')
        .get(payments.get_payment)
        .put(payments.update_payment)
        .delete(payments.delete_payment);

    // schedules Routes
    app.route('/schedule')
        .get(schedules.list_all_schedules)
        .post(schedules.create_schedule);

    app.route('/schedule/:schedule_id')
        .get(schedules.get_schedule)
        .put(schedules.update_schedule)
        .delete(schedules.delete_schedule);

    // customers Routes
    app.route('/customers')
        .get(customers.list_all_customers)
        .post(customers.create_customer);

    app.route('/customers/:customers_id')
        .get(customers.get_customer)
        .put(customers.update_customer)
        .delete(customers.delete_customer);

    // users and login Routes
    app.route('/login/:email/:pwd')
        .get(users.authenticate);

    app.route('/users')
        .get(users.get_users)
        .post(users.add_new_user);

    app.route('/users/:email')
        .get(users.get_user)
        .put(users.update_user_prof)
        .delete(users.delete_user);
};
