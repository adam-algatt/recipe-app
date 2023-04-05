import React, { useState, useEffect } from 'react'
import { getAllCategories, getAllMealtypes } from '../utils/fetch'


const AddRecipe = () => {
const [categories, setCategories] = useState([''])
const [mealtypes, setMealtypes] = useState([''])
const [clicked, setClicked] = useState(false);
const [categoryChecked, setCategoryChecked] = useState(false)
const [mealtypeChecked, setMealtypeChecked] = useState(false)

const [formBody, setFormBody] = useState({ 
RecipeTitle : '',
RecipeSubtitle : '',
PreparationTime : '',
TotalTime: '',
category: categories[0],
mealtype: mealtypes[0],
newCategory: null,
newMealtype: null
})



useEffect(() => {
  const getCategoriesAndMealTypes = async () => {
  const categories = await getAllCategories();
  const mealtypes = await getAllMealtypes()
  setCategories( categories.response )
  setMealtypes( mealtypes.response )

}
getCategoriesAndMealTypes();
},[])

 
const handleChange = (e) => {
  // console.log(e);
  const { name, value } = e.target;

// const formatted = placeholder.replace(/\s+/g, ''); //remove space in placeholder
console.log(value, name);

  setFormBody((prev) => {
    return {
      ...prev,
      [name]: value
    }
  })
  }

  const handleDropDownChange = function(e) {
    const val = e.target.value; 
    if(e.target.className === 'category-select' && val)setFormBody(prev => {return{...prev, category : val} })
    if(e.target.className === 'mealtype-select' && val)setFormBody(prev => {return{...prev, mealtype : val} })

  }

  const selectedFocus = function(e){
    // console.log(e)
//     let selected = e.target;
//     let select = document.getElementsByClassName('category-select')
//     let that = select.option[select.selectedIndex].getAttribute('value')

//  console.log(that);

  }
  
let count = 0
  const handleClick = () => {
if (count === 0) setClicked(true);
count++
  }

   const allCats = categories.map(cat => cat.name) 
  
     return (
    <div className='recipe-form-container'>
    <form className='recipe-form' >
    <h1>Enter a new Recipe</h1>
      <input name='RecipeTitle' value={formBody.RecipeTitle} onChange={handleChange} type='text' placeholder='Recipe Title'/>
      <input name='RecipeSubtitle'  value={formBody.RecipeSubtitle} onChange={handleChange} type='text' placeholder='Recipe Subtitle'/>
      <input name='PreparationTime'  value={formBody.PreparationTime} onChange={handleChange} type='text' placeholder='Preparation Time'/>
      <input name='TotalTime'  value={formBody.TotalTime} onChange={handleChange} type='text' placeholder='Total Time'/>
   
      
      {!categoryChecked ? (
        <span className='recipe-form-span'>
      <select onFocus={selectedFocus} className='category-select' onChange={handleDropDownChange} name='Choose a category'  style={{'textAlign':'center'}}>
       {categories.map(cat => (
        <option onClick={handleClick} key={`${cat._id}-${Date.now()}`} value={cat.name} >{cat.name}</option>
      ))} 
      </select>
      <input type="checkbox" id='categories-checkbox' name='other-checked' />
      <label htmlfor="categories-checkbox">Add a New Category</label>
</span>
     ) : (
      <input name='newCategory' type='text' placeholder='Enter a New Category'></input>
     )
     
    }
  
      
    
      <select className='mealtype-select' name='Choose a mealtype (ie poultry)' onFocus={selectedFocus} style={{'textAlign':'center'}}>
      {/* iterates through state of all categories */}
       {mealtypes.map(type => (
 <option  onClick={handleClick} key={`${type._id}-${Date.now()}`}  value={type.mealName} >{type.mealName}</option> 
      ))} 
      </select>
    
      <input type="checkbox" id='mealtype-checkbox' name='other-checked'  />
      <label htmlfor="mealtype-checkbox">Add a New Mealtype</label>
      <button className='recipe-add-btn' onClick={(e) => {
        e.preventDefault()
      console.log(formBody)}}>Submit</button>

    </form>
    </div>
  )
}

export default AddRecipe
