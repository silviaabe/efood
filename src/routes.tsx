import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Trattoria from './pages/Trattoria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Trattoria />} />
  </Routes>
)

export default Rotas
