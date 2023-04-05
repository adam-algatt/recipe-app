
import { useContext, useState } from "react"
import { useRecipeContext } from "./useRecipeContext"

export const useSelectRecipe = () => {

    const [recipeError, setRecipeError] = useState('');
    const [recipeLoading, setRecipeLoading] = useState(false);
    const { dispatch } = useRecipeContext();

   const selectRecipe = async (id) => {
    setRecipeLoading(true)
    console.log('select recipe called');
    try {
        const response = await fetch(`/api/recipe/${id}`, {
            method: 'GET',
        })
        const json = await response.json()
        console.log(json)

        dispatch({
            type: 'SELECT RECIPE',
            payload: json
        })
    } catch (error) {
        console.log('error ' + error )
    }
}

    const deselectRecipe = () => {

        dispatch({
            type: 'DESELECT RECIPE'
        })
    }

    return { selectRecipe, deselectRecipe, recipeLoading, recipeError }
}

