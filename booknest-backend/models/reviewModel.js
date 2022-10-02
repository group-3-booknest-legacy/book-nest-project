const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// creating new Schema
const ReviewSchema = new Schema (
  {
// user: {type: String, required: true, lowercase: true, trim: true},
title: String,
author: String,
genre: String,
review: String, 

timestamp: {
  type: String,
  default: Date.now()
}
}
);

// assigning Schema and model to a variable
const Review = mongoose.model("Review", ReviewSchema); 

module.exports = Review; 