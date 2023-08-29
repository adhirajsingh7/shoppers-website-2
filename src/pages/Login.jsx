import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = (userData) => {

  // const validUser = JSON.parse(localStorage.getItem(`${userData.email}`))
  

  const [loginUser, setLoginUser]=useState({
    email: '',
    password: ''
  })
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(loginUser)
  }
  
  const handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    setLoginUser({...loginUser,[name]: value})
    
  }

  const validUser = JSON.parse(localStorage.getItem(`${loginUser.email}`))

  const handleStorage =()=>{
    console.log(validUser)
  }

  return (
    <>
    <div>
      <form>
        {/* <label htmlFor="email">Email</label> */}
        <TextField variant='outlined' label="Email" type="email" name='email' onChange={handleChange} /><br />
        {/* <label htmlFor="password">Password</label> */}
        <TextField variant='outlined' label="Password" type="password" name='password' onChange={handleChange} /><br />
        <FormControlLabel control={<Checkbox name="remember-me" id="remember-me" />} label="remember-me" />
        <br />
        {/* <input type="submit" onClick={handleSubmit} /> */}
        <Button type='submit' variant='contained' onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
    <div>Dont have an account? <Link to="/signup">Sign-up</Link></div>
    <div>
      <button onClick={handleStorage}>btn storage</button>
      <Button variant="outlined">Outlined</Button>
    </div>
    </>
  )
}

export default Login