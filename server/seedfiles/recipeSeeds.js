const mongoose = require('mongoose')
const Recipe = require('../models/Recipe')


const seedRecipes = [








]

const seedDB = async() => {
    await Recipe.deleteMany({})
    await Recipe.insertMany(seedRecipes)
}