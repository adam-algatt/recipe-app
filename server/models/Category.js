const mongoose = require('mongoose');

const categoryModel = mongoose.Schema({
  name: {
    type: String,
  }
})

const Category = mongoose.model('Category', categoryModel);
module.exports = Category;