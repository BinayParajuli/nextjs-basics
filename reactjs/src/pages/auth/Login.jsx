import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'


const Login = () => {

  const navigate = useNavigate()

  const handleLogin = async (data)=>{
    try{
      const response = await axios.post(`${baseUrl}login/`,data )
      if (response.status==200){
        localStorage.setItem('token', `Token ${response.data.token}`)
        navigate("/")
      }else{
        alert("Login Failed")
      }
    } catch(error) {
      alert("Error")
    }
  }

  return (
    
    <Form type="Login" onsubmit={handleLogin}/>

  )
}

export default Login