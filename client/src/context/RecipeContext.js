import { createContext, useReducer, useState } from "react";

export const RecipeContext = createContext(); 

export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT RECIPE':
            console.log(action.payload)
        return {
                selectedRecipe: action.payload
            }
            case 'DESELECT RECIPE':
                return {
                    selectedRecipe: null
                }
                default:
                    return state
    }
}

// context with user state and reducer method
export const RecipeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, {
      selectedRecipe: null
    })

    // useEffect(() => {
        
    // }, [])
    
    const [favorites, setFavorites] = useState([''])
    const [categories, setCategories] = useState([''])

  // destructured user state and reducer method
  
  return (
      <RecipeContext.Provider value={{ ...state, dispatch, categories, setCategories }}
      >
          { children }
      </RecipeContext.Provider>
  )
  }

