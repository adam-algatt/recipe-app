import React, { useState } from 'react'
 import FavoriteIcon from '@mui/icons-material/Favorite';
 import DeleteTwoToneIcon  from '@mui/icons-material/DeleteTwoTone';
 import EditTwoToneIcon  from '@mui/icons-material/EditTwoTone';
import { useAuthContext } from '../context/hooks/useAuthContext'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const RecipeIcons = ({ isFavorited, setFavoriteRecipe }) => {

  const [ isClicked, setIsClicked] = useState(false)
  
  const handleClick = ()=> {
    setFavoriteRecipe()
    setIsClicked(true)
    return
  }
  const { user } = useAuthContext()
  console.log(user)
  return (
    <div className='icon-container'>
    {isFavorited || isClicked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderOutlinedIcon onClick={handleClick} fontSize='large'/>}
    <DeleteTwoToneIcon fontSize='large'/>
    <EditTwoToneIcon fontSize='large'/>
    </div>
  )
}

export default RecipeIcons
