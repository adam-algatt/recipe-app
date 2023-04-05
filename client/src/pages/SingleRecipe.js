import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import RecipeFull from '../components/RecipeFull';
import { useAuthContext } from '../context/hooks/useAuthContext';
import { useNavigate } from 'react-router-dom'
import { useRecipeContext } from '../context/hooks/useRecipeContext';
import { useSelectRecipe } from '../context/hooks/useSetRecipe';

const SingleRecipePage = () => {
  const [pressed, setPressed] = useState(false)
  const { selectedRecipe } = useRecipeContext();
  const { deselectRecipe } = useSelectRecipe();
  const { user } = useAuthContext(); 

  const navigate = useNavigate();
  
    useEffect(() => {
// take single recipe fetch function out of fetch util and add in this useEffect
      const run = async() => {
      if (!user) navigate('/')
      console.log({ navigate })
    //  selectedRecipe._id && console.log('selectedRecipe.title', selectedRecipe.title)
    if (selectedRecipe === null) navigate('/recipes')
    }
    run()
    // take single recipe fetch function out of fetch util and add in this useEffect

  }, [user, selectedRecipe])

  const handleBackArrow = () => {
    navigate('/recipes')
  }

// if browser back arrow is clicked
// navigate to the previous page in useNavigate()
  useEffect(() => {
    window.onpopstate = e => {
      setPressed(true)
      deselectRecipe()
      handleBackArrow()
    };
  });

  return (
    <>
        <Nav/>
       {selectedRecipe !== null &&
         <RecipeFull 
              title={selectedRecipe.title}
              subtitle={selectedRecipe.subtitle}
              ingredients={selectedRecipe.ingredients}
              directions={selectedRecipe.directions}
              id={selectedRecipe._id}
         />
       }
       </> 
      )
    };
    


export default SingleRecipePage
