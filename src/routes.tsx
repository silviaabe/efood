import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProfileItalian from './pages/ProfileItalian'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profileItalian" element={<ProfileItalian />} />
  </Routes>
)

export default Rotas
