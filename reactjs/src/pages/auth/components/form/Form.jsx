import React from 'react'
import { useState } from 'react'


const Form = ({type, onsubmit}) => {

  const [data, setData] = useState({
    email:"",
    username:"",
    password:""
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
    setData(
      {
        ...data,
        [name]:value
      })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("form submit")
    onsubmit(data)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto m-1 px-5">
        <h1>{type=="Login" ? "Login Here....." : "Register Here...."}</h1>
      <div className="mb-5">
        <label htmlFor="username" className="block mb-2.5 text-sm font-medium text-heading">Your username</label>
        <input onChange={handleChange} name="username" type="username" id="username" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="username"  />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
        <input onChange={handleChange} name="password" type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
      </div>
      {type != "Login" &&
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading ">Your email</label>
        <input onChange={handleChange} name="email" type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
      </div>
      }
      <button type="submit" className="text-red-500 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
    </form>
  )
}

export default Form