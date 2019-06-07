const db = require("../models");

exports.register = async (req, res, next) => {
  try {
    const user = await db.User.create(req.body);
    const { id, username } = user;

    res.json({ id, username });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await db.User.findOne({ username: req.body.username });

    if (!user) {
      // throw new Error("Invalid username");
      res.status(404).send({ Error: "Invalid username" });
    }

    const { id, username } = user;
    const valid = await user.comparePassword(req.body.password);

    if (valid) {
      res.json({ id, username });
    } else {
      // throw new Error("Invalid Password");
      res.status(401).send({ Error: "Invalid Password" });
    }
  } catch (error) {
    next(error);
  }
};
