module.exports = (app) => {
  const helloController = require('./controller.js');

  app.route('/hello')
    .get(helloController.returnName)

  app.route('/hello/:name')
    .get(helloController.returnName)
};