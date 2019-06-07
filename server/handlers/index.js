module.exports = {
  ...require("./auth")
};

module.exports.notFound = (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;

  next(error);
};

module.exports.errors = (error, req, res, next) => {
  res.status(error.status || 500).json({
    error: error.message || "Something went wrong"
  });
};
