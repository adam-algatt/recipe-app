import React, { useState, useEffect } from 'react'
import RecipeIcons from './RecipeIcons'
import { useAuthContext } from '../context/hooks/useAuthContext'
import { setFavorite, getFavorites } from '../utils/fetch'

const Recipe = ({ 
    title,
    subtitle,
    ingredients,
    directions,
    id }) => {

      const [favorites, setFavorites] = useState([''])
      const { user } = useAuthContext()

      useEffect(() => {
        
        const getAllFavorites = async() => {

        const allFavorites =  await getFavorites(user._id)
        console.log(allFavorites)
        setFavorites(allFavorites)
        }
        getAllFavorites()
      }, [])

      console.log(favorites.includes(id));
      let isFavorited = favorites.includes(id) // hoist isFavoirted and add useEffect that modifies the var each render for accurate favorite stats
      //isFavorited={isFavorited}


      const setFavoriteRecipe = async (recipeId) => {
       await setFavorite(user._id, id)
       return
      }

      
  return (
    <>
    <div className='recipe-container'>
    <RecipeIcons  isFavorited={isFavorited} recId={id} setFavoriteRecipe={setFavoriteRecipe}/>

      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <ul>
        {ingredients.map((igredient, idx) => (
            <li
            key={`${idx}-${Date.now()}`}>
            {igredient}
            </li>
        ))}
      </ul>
      <ol>
      {directions.map((dir, idx) => (
            <li
            key={`${idx}-${Date.now()}`}>
            {dir}
            </li>
        ))}
      </ol>

    </div>
    </>
  )
}

export default Recipe
