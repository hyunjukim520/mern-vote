const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // "Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ..."
  if (req.headers["authorization"]) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (error) {
        next(Error("Failed to authenticate token"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    next(Error("No token provided"));
  }
};
