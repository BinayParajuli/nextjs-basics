import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../config'
import axios from 'axios'


const EditBlog = () => {

  const {slug} = useParams()

  const navigate = useNavigate()

  const handleEdit = async(data)=>{
    try{
      console.log("this is edit...")
      const response = await axios.patch(`${baseUrl}v1/rental/vehicle-category/${slug}/`,data,{
        headers:{
          "Content-Type":"multipart/form-data",
          "Authorization":localStorage.getItem("token")
        }}
       )
      console.log(response)
      if (response.status==200){
        navigate(`/blog/${response.data.slug}`)
      }else{
        alert("Edit Failed")
      }
    } catch(error) {
      console.log(error)
      alert(error?.response?.data)
    }
  }
  

  return (
    <Layout>
        <Form type="Edit" onsubmit={handleEdit}/>
    </Layout>
  )
}

export default EditBlog