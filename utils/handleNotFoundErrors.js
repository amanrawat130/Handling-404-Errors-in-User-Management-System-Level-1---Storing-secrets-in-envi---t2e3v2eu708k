

const handleNotFoundErrors = (res, errorMessage) => {
  res.status(404).json({ error: errorMessage });
};

module.exports = handleNotFoundErrors;
