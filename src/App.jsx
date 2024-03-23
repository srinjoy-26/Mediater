import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
export default function App() {
  return (
   <>
     <div className='bg-black  md:h-screen pt-2'>
     <Navbar/>
     <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
     <Footer/>
     </div>
   </>
  )
}