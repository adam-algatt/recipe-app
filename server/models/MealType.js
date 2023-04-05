const mongoose = require('mongoose');

const mealTypeModel = mongoose.Schema({
  mealName: {
    type: String,
  }
})

const MealType = mongoose.model('MealType', mealTypeModel);
module.exports = MealType;
