import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import Recipe from '../components/RecipeFull';
import RecipeMin from '../components/RecipeMinimal';
import { useAuthContext } from '../context/hooks/useAuthContext';
import { useNavigate } from 'react-router-dom'
import { getAllRecipes, getSingleRecipe } from '../utils/fetch'
import { useSelectRecipe } from '../context/hooks/useSetRecipe';
import { useRecipeContext } from '../context/hooks/useRecipeContext';
import { useLogin } from '../context/hooks/useLogin';
import { useSetRecipe } from '../context/hooks/useSetRecipe'
const RecipePage = () => {
  const [recipeType, setRecipeType] = useState('min')
  const [recipes, setRecipes] = useState(['']);
  // const [selectedRecipe, setSelectedRecipe] = useState('');
  const { login, loginError, loginLoading } = useLogin();

 const { selectRecipe, deselectRecipe, recipeLoading, recipeError } = useSelectRecipe();
 const { selectedRecipe } = useRecipeContext();

  const {
    user
  } = useAuthContext();
  const navigate = useNavigate();
  
    useEffect(() => {
// take single recipe fetch function out of fetch util and add in this useEffect
      const run = async() => {
      if (!user) navigate('/')
      if (user) {
       const allRecipes =  await getAllRecipes()
       setRecipes(allRecipes)
      }
      // if(recipeType === 'full') navigate(`/recipes/${selectedRecipe._id}`)
    }
    // if(window.location.href === 'http://localhost:5005/api/recipes' && selectedRecipe !== null) deselectRecipe()
    run()
    // take single recipe fetch function out of fetch util and add in this useEffect

  }, [user])

  useEffect(() => {
    if (!recipeLoading) console.log(selectedRecipe)
    
    // if(recipeType === 'full' && !recipeLoading) navigate(`/${selectedRecipe._id}`)
    
      }, [recipeType])

    const handleClick = async(id) => {
     await selectRecipe(id)
      setRecipeType('full')
      navigate('/singlerecipe/' + id)
    }

  return (
    <>
      <Nav full={false}/> 
          <div className='recipes-container'>

            {recipes.map((rec, idx) => (
              <RecipeMin 
              key={`${rec._id}-${Date.now()}`}
              title={rec.title}
              subtitle={rec.subtitle}
              totalTime={rec.totalTime}
              prepTime={rec.prepTime}
              id={rec._id}
              idx={idx}
              setRecipeType={setRecipeType}
              click={handleClick}
            />
            ))}
            </div>
      
       </> 
      )
    };
    


export default RecipePage
