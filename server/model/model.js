const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  father_name: String,
  mother_name: String,
  dob: Date,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: Number,
  gender: String,
});

const student_basic_info = mongoose.model("studentBasicInfo", schema);

module.exports = student_basic_info;
