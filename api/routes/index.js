const userController = require('../controller/UserController');

module.exports = function (app) {
  userController(app);
  // Other route groups could go here, in the future
};
