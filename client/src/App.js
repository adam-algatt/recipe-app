import React, { useState } from 'react'
import RecipePage from './pages/RecipePage'
import HomePage from './pages/HomePage'
import SingleRecipe from './pages/SingleRecipe'
import RecipeFull from './components/RecipeFull'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeAdd from './pages/RecipeAdd'


// document.querySelector('#body').setAttribute('style')
const App = () => {
  const [id, setId] = useState('')

  return (
    <div className='app'>   
    <Router>
     <Routes> 
      <Route path='/' Component={HomePage}>
      </Route>
      <Route path='recipes' Component={RecipePage}></Route>
      <Route path='singlerecipe/:id' Component={SingleRecipe}></Route>
      <Route path='addrecipe' Component={RecipeAdd}></Route>
    </Routes>
     </Router>
    </div>
  )
}

export default App
