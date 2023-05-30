const mongoose = require('mongoose');

const JobPosting = new mongoose.Schema(
  {
    postingId: {
      type: String,
      unique: true,
    },
    title: String,
    blurb: String,
    jobCode: String,
    languages: [String],
    frameworks: [String],
    closingDate: Date,
    employeeId: String, // Add the employeeId field as a string
  },
  { timestamps: true }
);

module.exports = mongoose.model('JobPosting', JobPosting);
