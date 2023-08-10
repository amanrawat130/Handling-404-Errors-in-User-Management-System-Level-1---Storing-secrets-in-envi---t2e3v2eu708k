const User = require("../models/User");
const handleAsyncErrors = require("../utils/handleAsyncErrors");
const handleNotFoundErrors = require("../utils/handleNotFoundErrors");

// Controller with error handling
const getAllUsers = handleAsyncErrors(async (req, res) => {
  const users = await User.find();
  // Check if users array is empty
  if (users.length === 0) {
    // Implement 404 error handling
    handleNotFoundErrors(res, "User not found");
  } else {
    res.status(200).json(users);
  }
});

const getUserByID = handleAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    // Implement 404 error handling
    handleNotFoundErrors(res, "User not found");
  } else {
    res.status(200).json(user);
  }
});

module.exports = {
  getAllUsers,
  getUserByID,
};
