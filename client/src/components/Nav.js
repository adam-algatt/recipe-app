import React from 'react'
import RecipeIcons from './RecipeIcons'
import Settings from './Settings'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate(); 

  return (
    <div className='nav-container'>
      <ul> 
       <li>All Recipes</li>
       <li>Favorites</li>
       <li onClick={()=>navigate('/addrecipe')}>Add Recipe</li>
      </ul>
      <Settings/>
    </div>
  )
}

export default Nav
