"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default  function Form (){
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter();
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoading(true)
        try{
          const response = await fetch("/react-form/api",
            {
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify({title,price,description})
            })
            if  (response.ok){
              router.push("/products-db")
            }
        }catch{

        }finally{
          setLoading(false)
        }
        
        

    }
  return (
    <>
    <div>Create Product here...</div>
    <form onSubmit={handleSubmit} className='bg-black' method="POST">
        <label>Title<input onChange={(e)=> setTitle(e.target.value)}/></label>
        <label>price<input onChange={(e)=> setTitle(e.target.value)}/></label>
        <label>description<input onChange={(e)=> setTitle(e.target.value)}/></label>
        <button type="submit" disabled={loading}>{loading?"Submitting" : "Submit"}</button>
    </form>
    </>
  )
}

