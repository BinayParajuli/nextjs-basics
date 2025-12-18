import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'
import axios from 'axios'


const AddBlog = () => {

  const navigate = useNavigate()

  const handleAdd = async(data)=>{
    try{
      console.log(data)
      const response = await axios.post(`${baseUrl}v1/rental/vehicle-category/`,data,{
        headers:{
          "Content-Type":"multipart/form-data",
          "Authorization":localStorage.getItem("token")
        }}
       )
      if (response.status==201){
        navigate("/")
      }else{
        alert("Creation Failed")
      }
    } catch(error) {
      alert(error?.response?.data)
    }
  }

  return (
    <Layout>
      <Form type="Add" onsubmit={handleAdd}/>
    </Layout>
  )
}

export default AddBlog