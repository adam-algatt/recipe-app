

export const getSingleRecipe = async(id) => {
    try {
        const response = await fetch(`http://localhost:5005/api/recipe/${id}`, {
            method: 'GET', 
            headers: {
                'content-type': 'application/json'
            }
        })
        const json = await response.json();

        return json;
    } catch (error) {
     return   console.log(error)
    }
}

export const getAllRecipes =  async () => {

    try {
      const response = await fetch('/api/getallrecipes', {
        method: 'GET',
      })

    //   const json = await response.json()
 const json = response.json()
      return json;

    } catch (e) {
      console.log('error:', e)
    }
  }

  export const AddRecipe =  async (recipe, user) => {
    try {

      const response = await fetch('/api/addrecipe', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        }
      })

    //   const json = await response.json()
 const json = response.json()
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  export const getAllCategories = async () => {

    try {
      const res = await fetch('http://localhost:5005/api/categories', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      const json = await res.json()
      console.log(json)
      return  json 
    } catch (e) {
      console.log(e);
    }

  }

  export const getAllMealtypes = async () => {

    try {
      const res = await fetch('http://localhost:5005/api/mealtypes', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      const json = await res.json()
      console.log(json)
      return  json 
    } catch (e) {
      console.log(e);
    }

  }

  export const setFavorite = async (userId, recipeId) => {

const reqBody = {
  'id' : userId
}
console.log(JSON.stringify(reqBody));
    try {

      const res = await fetch(`http://localhost:5005/api/recipe/${recipeId}/favorite/`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        }, 
        body: JSON.stringify(reqBody)
      })

      const json = await res.json()
      console.log(json)
      return  json 
    } catch (e) {
      console.log(e);
    }

  }

  export const getFavorites = async (userId) => {
    try {
      const res = await fetch(`http://localhost:5005/api/allusers/${userId}/favorites`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })

      const json = await res.json()
      console.log(json.response[0].favorites)
      return  json.response[0].favorites
    } catch (e) {
      console.log(e);
    }
  }


