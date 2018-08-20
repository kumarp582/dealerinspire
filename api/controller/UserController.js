const express = require('express');
const userService = require("../services/UserService.js");

module.exports = function (app) {
  var apiRoutes = express.Router();

  apiRoutes.get('/users', (req, res) => {
    const userID = req.query.user_id;
    const searchText = req.query.q;

    if (userID) {
      //get details of user by his ID
      userService.getUserDetailsByID(userID, (err, result) => {
        if (err) {
          res.send({ 'error': err });
        } else {
          res.status(200).send(result);
        }
      });
    } else if (searchText) {
      //get users by text search
      userService.getUsersBySearch(searchText, (err, result) => {
        if (err) {
          res.send({ 'error': err });
        } else {
          res.status(200).send(result);
        }
      });
    } else {
      //Get All Users
      userService.getAllUsers((err, result) => {
        if (err) {
          res.send({ 'error': err });
        } else {
          res.status(200).send(result);
        }
      });
    }
  });

  app.use("/api/", apiRoutes);
};
