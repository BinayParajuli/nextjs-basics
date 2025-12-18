import React from 'react'
import { Link, Links } from 'react-router-dom'


const Navbar = () => {
  return (
        <nav className="bg-neutral-primary sticky left-0 w-full z-20 top-0 start-0 border-b border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Blog</span>
                </Link>
                <div className="flex  md:order-2">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <Link to="/blog/add" className="block py-2 px-3 text-heading bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Create Blog</Link>
                        </li>
                        <li>
                            <Link to="/login" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Register</Link>
                        </li>
                    </ul>
                
        
                </div>
                
            </div>
        </nav>

  )
}

export default Navbar