import React, { useState } from 'react'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

const Settings = () => {
    const [ clicked, setClicked ] = useState(false);
  return (
    <div className={clicked ? 'settings-container clicked' : 'settings-container' } onClick={()=> setClicked(prev => !prev)}>

    {clicked === false ?  ( 
        <SettingsTwoToneIcon />
      
    ) : (
        <>
        <SettingsTwoToneIcon />
        <form>
            
        </form>
        </>
    )}
    </div>
  )
}

export default Settings
