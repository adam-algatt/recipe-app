import React from 'react'
import AddRecipe from '../components/AddRecipe'
import Nav from '../components/Nav'
const RecipeAdd = () => {
  return (
    <div className='recipe-add-container'>
    <Nav />
      <AddRecipe key={`${Date.now()}-${Math.random()}`}/>
       </div>
        )
}

export default RecipeAdd
