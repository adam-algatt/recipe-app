import { RecipeContext } from "../RecipeContext"
import { useContext } from 'react'

export const useRecipeContext = () => {
    const context = useContext(RecipeContext)
  
    if(!context) {
      throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
  
    return context
  }