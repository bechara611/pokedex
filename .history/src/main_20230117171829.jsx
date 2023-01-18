
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PokedexRouter } from './router/PokedexRouter'
import { store } from './store/Store'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  <BrowserRouter>
  <PokedexRouter></PokedexRouter>
  </BrowserRouter>
  </Provider>

)
