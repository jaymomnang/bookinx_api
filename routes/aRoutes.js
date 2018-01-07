'use strict';
module.exports = function(app) {
    var booking = require('../controllers/bookingController');
    var flights = require('../controllers/flightsController');
    var schedules = require('../controllers/schedulesController');
    var customers = require('../controllers/customersController');
    var payments = require('../controllers/paymentController');
    var users = require('../controllers/userController');

    // booking Routes
    app.route('/booking')
        .get(booking.list_all_bookings)
        .post(booking.create_booking);

    app.route('/booking/:booking_id')
        .get(booking.get_booking)
        .put(booking.update_booking)
        .delete(booking.delete_booking);

    // flights Routes
    app.route('/flight')
        .get(flights.list_all_flights)
        .post(flights.create_flight);

    app.route('/flight/:flight_id')
        .get(flights.get_flight)
        .put(flights.update_flight)
        .delete(flights.delete_flight);

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