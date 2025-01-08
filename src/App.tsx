import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Trattoria/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Rotas />
          <Footer />
          <Cart />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
