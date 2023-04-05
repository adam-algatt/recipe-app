import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelectRecipe } from '../context/hooks/useSetRecipe';
const RecipeMin = ({  
    title,
    subtitle,
    totalTime,
    prepTime,
    idx,
    id,
    setRecipeType, 
    click
     }) => {

const navigate = useNavigate(); 
const { selectRecipe, deselectRecipe } = useSelectRecipe();
 
  return (
    <>
    <div className='recipe-container-min' onClick={()=> click(id)}> 
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <div className='time-div'>
      <h4>Total Time: {totalTime}</h4>
      <h4>Preparation Time: {prepTime}</h4>
    </div>
    </div>
    </>
  )
}

export default RecipeMin
