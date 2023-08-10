const User = require("../models/User");
const handleAsyncErrors = require("../utils/handleAsyncErrors");
const handleNotFoundErrors = require("../utils/handleNotFoundErrors");

// Make all the necessary changes to the controller such that it uses the error handlers to handle 404 errors

// Controller with error handling
const getAllUsers = handleAsyncErrors(async (req, res) => {
  const users = await User.find();
  //Implement 404 error handling
  res.status(200).json(users);
});

const getUserByID = handleAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  //Implement 404 error handling
  res.status(200).json(user);
});

// Error Response for both controllers: 
/*
{ error: "User not found" } Status Code: 404
*/

module.exports = {
  getAllUsers,
  getUserByID,
};
