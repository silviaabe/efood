import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menus from './pages/Menus'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Menus />} />
  </Routes>
)

export default Rotas
