'use strict';
module.exports = function(app) {
    var invoice = require('../controllers/invoiceController');
    var receipts = require('../controllers/receiptsController');
    var schedules = require('../controllers/schedulesController');
    var customers = require('../controllers/customersController');
    var quotes = require('../controllers/quotesController');
    var users = require('../controllers/userController');

    // invoice Routes
    app.route('/invoice')
        .get(invoice.list_all_invoices)
        .post(invoice.create_invoice);

    app.route('/invoice/:invoice_id')
        .get(invoice.get_invoice)
        .put(invoice.update_invoice)
        .delete(invoice.delete_invoice);

    // receipts Routes
    app.route('/receipt')
        .get(receipts.list_all_receipts)
        .post(receipts.create_receipt);

    app.route('/receipt/:receipt_id')
        .get(receipts.get_receipt)
        .put(receipts.update_receipt)
        .delete(receipts.delete_receipt);

    // quotes Routes
    app.route('/quote')
        .get(quotes.list_all_quotes)
        .post(quotes.create_quote);

    app.route('/quotes/:quote_id')
        .get(quotes.get_quote)
        .put(quotes.update_quote)
        .delete(quotes.delete_quote);

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