'use strict';
module.exports = function (app) {

  let loginCtrl = require('./controllers/loginController')

  app.route('/login')
    .get(loginCtrl.get)
};

