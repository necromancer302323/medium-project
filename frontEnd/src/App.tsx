
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path='/publish' element={<Publish/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
