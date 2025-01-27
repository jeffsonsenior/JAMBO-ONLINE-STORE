import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/cart/Cart'
import Collection from './pages/Collection/Collection'
import Navbar from './Components/Navbar/Navbar'
import Login from './pages/Login/Login'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'



const App = () => {
  return (
    <div>
      <ToastContainer />
    <Navbar />  
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path= '/category/:category' element={<Collection />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
