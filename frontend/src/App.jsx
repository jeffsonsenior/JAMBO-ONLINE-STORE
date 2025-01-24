import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Cart from './Pages/cart/Cart'
import Collection from './pages/Collection/Collection'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Navbar from './Components/Navbar/Navbar'
const App = () => {
  return (
    <div>
    <Navbar />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path= '/category/:category' element={<Collection />} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
