const mongoose = require("mongoose");
// console.log(process.env.DATABASE);
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

module.exports.User = require("./user");
module.exports.Poll = require("./poll");
