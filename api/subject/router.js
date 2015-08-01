/**
 * Created by HungNguyen on 8/1/15.
 */


var express = require('express')
    , controller = require('./controller');


var router = express.Router();

module.exports = function (app) {
    router.route('/subject')
        .get(controller.get)
        .post(controller.post)
        .put(controller.put)
        .delete(controller.delete);

    app.use('/', router);
};