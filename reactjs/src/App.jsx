import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register' 
import Login from './pages/auth/Login'
import Home from './pages/blog/Home'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import SingleBlog from './pages/blog/SingleBlog'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/blog/add' element={<AddBlog />}></Route>
          <Route path='/blog/edit/:slug' element={<EditBlog />}></Route>
          <Route path='/blog/:slug' element={<SingleBlog />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
