import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProfileItalian from './pages/ProfileItalian'
import Restaurants from './pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profileItalian" element={<ProfileItalian />} />
    <Route path="/restaurantes/:id" element={<Restaurants />} />
  </Routes>
)

export default Rotas
