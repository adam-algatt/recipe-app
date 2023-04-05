const express = require('express')
const router = express.Router()

const { newMealtype, createRecipe, deleteRecipe, getAllRecipes, getSingleRecipe, addToFavorites, getAllCategories, getAllMealtypes } = require('../controllers/recipeController')

router.route('/addrecipe').post(createRecipe);
router.route('/getallrecipes').get(getAllRecipes);
router.route('/recipe/:id').get(getSingleRecipe) 
router.route('/recipe/:id').delete(deleteRecipe) 
router.route('/recipe/:id/favorite').put(addToFavorites)
router.route('/categories').get(getAllCategories)
router.route('/mealtypes').get(getAllMealtypes)
router.route('/mealtypes').post(newMealtype)
module.exports = router;