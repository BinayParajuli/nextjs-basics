import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { baseUrl } from '../../config'
import axios from 'axios'


const Home = () => {

  const [blogs, setBlogs] = useState([])   
  
  const fetchBlogs = async()=>{
    const response = await axios.get(`${baseUrl}v1/rental/vehicle-category/`, {
      headers:{
          "Authorization":localStorage.getItem("token")
        }
    })
    if (response.status === 200){
      setBlogs(response.data)
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])
  console.log(blogs)
  return (
    <Layout>
      <div className="flex gap-2">
      {
        blogs.length > 0 && blogs.map((blog)=>{
          return <Card blog={blog}/>
        })
      }
      </div>
    </Layout>
  )
}

export default Home