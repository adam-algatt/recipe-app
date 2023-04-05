const Category = require('../models/Category');
const MealType = require('../models/Mealtype');
const Recipe = require('../models/Recipe');
const User = require('../models/User')



const checkExistedCategoriesAndMealtypes = async (cat, meal) => {
    const isNewCategory = await Category.findOne({ name: cat })
    const isNewMealtype = await MealType.findOne({ name: meal })

    return [isNewCategory, isNewMealtype]
}
const createRecipe = async(req, res) => {


    /* Will be stringified when fetch req is added to client-side*/
    let userIngredient = [
   
     ]
    let userdirection = [
 
     ]
userIngredient = JSON.stringify(userIngredient)
userdirection = JSON.stringify(userdirection)
    const userIngredients =   JSON.parse(userIngredient);
    const userdirections =   JSON.parse(userdirection);

    /* Will be stringified when fetch req is added to client-side*/

    // conditional to check if category exists
      // skil const category if category exists
      const userCategory = req.body.category;
      const userMealtype = req.body.mealtype;

     const existing = await checkExistedCategoriesAndMealtypes(userCategory, userMealtype)
     console.log(existing);
      let newCategory = null;
      let newMealtype = null;

//       const isNewCategory = await Category.findOne({ name: userCategory })
//       const isNewMealtype = await MealType.findOne({ name: userMealtype })
//       console.log(isNewCategory, '\n', isNewMealtype);
//       if (isNewCategory === null) {newCategory = await Category.create({ name: userCategory })}
//       if (isNewMealtype === null) {newMealtype = await MealType.create({ name: userMealtype })}
// console.log('line 41 recipe controller', newMealtype, newCategory);
    try {
//         const userRecipe = await Recipe.create({
//             title: req.body.title,
//             subtitle: req.body.subtitle,
//             ingredients: userIngredients,    
//             directions: userdirections,
//             totalTime: req.body.totalTime,
//             prepTime: req.body.prepTime,
//             category: `${newCategory !== null ? newCategory.name : isNewCategory.name}`,
//             mealtype: `${newMealtype !== null ? newMealtype.name : isNewMealtype.name}`
//         })

        res.status(200).json({ 'message': 'hi' })
    }

    catch (e) {
         res.status(400).json({ 'error': `${e}` })
    }
    console.log('finished recipe add');
}

const getAllRecipes = async(req, res) => {
    try {
        const allRecipes = await Recipe.find({})
      
          res.status(200).json(allRecipes)
    }
    catch (e) {
        console.log(e)
    }
    console.log('get all recipes finished:');
}

const getSingleRecipe = async(req, res) => {
    console.log('getSingleRecipe called')
    const id = req.params.id
    console.log(`supplied id: ${id}`, `type: ${typeof(id)}`)
    try {
        const selectedRecipe = await Recipe.findOne({ _id: req.params.id })
        // console.log(response)
        res.status(200).json(selectedRecipe)

    } catch (error) {
        res.status(400)
        res.json({"error": `${error}`})
    }

}

const deleteRecipe = async(req, res) => {
    console.log('deleteRecipe called')
    try {
      const response =  await Recipe.findByIdAndDelete( req.params.id )
      if (response !== null) {
      const json = await response.json
     return res.status(200).send({'message':`recipe with the id: ${req.params.id} has been successfully removed.`})
      } else {
        return res.status(404).send({'error': 'recipe not found'})
      }


    } catch (error) {
        console.log(error)
    }


}


addToFavorites = async (req, res) => {
    console.log('add to favorites called')

    try {

        const userUpdate = await User.findOneAndUpdate({
            _id: req.body.id
        }, {
            $addToSet: {
                favorites: req.params.id
            }
        })
        const response = await User.findOne({
            id: req.body.id
        }, '-password -__v')

        if (response !== null) {
            return res.status(200).json({
                response
            })
        }

    } catch (error) {
       return res.status(400).json({'error': `${error}`}) 
    }
    return res.status(404).json({
        'message': `${req.body.id} is already in favorites`
    })
}

const getAllCategories = async(req, res) => {

    try {
        const response = await Category.find({ }, '-__v')

        res.status(200).json({ 
            response
        })
    } catch (error) {
        res.status(400).json({ 
            'error' : `${error}`
        })
    }
}

const getAllMealtypes = async(req, res) => {

    try {
        const response = await MealType.find({ }, '-__v')
            .populate('_id mealName')
        res.status(200).json({ 
            response
        })
    } catch (error) {
        res.status(400).json({ 
            'error' : `${error}`
        })
    }
}

const newMealtype = async(req, res) => {
    try {
        const newMealtype = await MealType.create({
            mealName: req.body.mealName
        })
       

        res.status(200).json({ newMealtype })
    } catch (error) {
        res.status(400).json({'error': error})
    }
}




module.exports = { createRecipe, getAllRecipes, getSingleRecipe, deleteRecipe, addToFavorites, getAllCategories, getAllMealtypes, newMealtype };