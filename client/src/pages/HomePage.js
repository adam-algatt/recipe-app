import React, { useState, useEffect } from 'react'
import pan from '../images/pan.jpg'
import SignupLogin from '../components/SignupLogin';

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState('Login');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  useEffect (() => {
    const body = document.getElementById('body')
    body.style.background = `url(${pan}) no-repeat`
    body.style.backgroundPosition = 'center'
    body.style.backgroundSize = 'cover'
  }, [])

 const handleClick = (e) => {
  setEmail('') 
  setPassword('')
  setUsername('')
  return setSelectedTab(e.target.value)
 }
  return (
    <div className='home-container'>
        <div className='button-container'>
            <button className='homepage-btn' value='Login' onClick={handleClick}>Login</button>
            <button className='homepage-btn' value='Signup' onClick={handleClick}>Sign Up</button>
        </div>
        <SignupLogin 
        selectedTab={selectedTab}
        username={username}
        password={password}
        email={email}
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        />
    </div>
  )
}

export default HomePage
