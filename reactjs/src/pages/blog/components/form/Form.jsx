import React from 'react'
import { useState } from 'react'


const Form = ({type, onsubmit}) => {

  const [data, setData] = useState({
    name : "",
    description : "",
    file: ""
  })

  const handleChange = async(e)=>{
    const {name, value} = e.target
    setData({
      ...data,
      [name]:name === 'file' ? e.target.files[0] : value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    onsubmit(data)
  }

  return (

    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h1 className='text-blue-700 mb-2'>{type}</h1>
        <div className="relative z-0 w-full mb-5 group">
            <input onChange={handleChange} type="description" name="description" id="floating_description" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
            <label htmlFor="floating_description" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Description</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
              <input onChange={handleChange} type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
              <label htmlFor="floating_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
        </div>
        {/* <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
              <input type="tel"  name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
              <label for="floating_phone" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
              <label for="floating_company" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company (Ex. Google)</label>
          </div>
        </div> */}
        <div className="relative z-0 w-full mb-5 group">
              <input onChange={handleChange} type="file" name="file" id="file" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        </div>
        <button type="submit" className="text-red-500 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
      </form>
  )
}

export default Form