import React, { useEffect } from 'react'
import { useLogin } from '../context/hooks/useLogin'
import { useSignup } from '../context/hooks/useSignup'
import { useAuthContext } from '../context/hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

const SignupLogin = ({ selectedTab, username, password, email, setUsername, setPassword, setEmail }) => {
  const { login, loginError, loginLoading } = useLogin();
  const { signup, error, loading } = useSignup();
  const { user } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/recipes')
  }, [user, navigate])


  console.log(selectedTab)
  const handleSubmit = async(e) => {
    e.preventDefault()
        if (selectedTab === 'Login'){
         if(!email || !password) return alert('username and password are required')
        }
        if (selectedTab === 'Signup'){
          if (!username || !password || !email) return alert('please ensure all fields are filled in')
        } 

        if (selectedTab === 'Login') await login(email, password)
        if (selectedTab === 'Signup') await signup(username, email, password)

    }
  
    return (
    <>
    {selectedTab === 'Login' ? (
        <div className='form-container'>
        <h1>Login</h1>
        <form className='login-form'>
           <span> <h4>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4> 
            <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email...'/></span>
      
            <br/> 
            <span> <h4>Password</h4>
            <input type='text' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password...'/></span>
            <button className='homepage-btn' onClick={handleSubmit}>Submit</button>

        </form>
        </div>
    ) : (
        <div className='form-container'>
        <h1>Signup</h1>
        <form className='signup-form'>
        <span>       <h4>Username</h4>
            <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Enter a username...'/></span>

            <br/> 
            <span>    <h4>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4> 
            <input type='text'value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter a username...'/></span>
       
            <br/> 
            <span> <h4>Password</h4>
            <input type='text' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter a password...'/></span>
            <button className='homepage-btn' onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )}
    </>
  )
}

export default SignupLogin
