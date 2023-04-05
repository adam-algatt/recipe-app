const mongoose = require('mongoose');

const recipeModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
},
    directions: {
        type: [String],

    },
    totalTime: {
        type: String,
    },
    prepTime: {
        type: String,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }],
    mealtype: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mealtype'
    }]
}, 
{
    timestamps: true,
})

const Recipe = mongoose.model('Recipe', recipeModel);
module.exports = Recipe;