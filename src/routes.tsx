import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menus from './pages/Menus'
import Checkout from './pages/Checkout'

const MainRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Menus />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default MainRoute
