import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import MainRoute from './routes'
import { store } from './store'
import Cart from './components/Cart'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <MainRoute />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
