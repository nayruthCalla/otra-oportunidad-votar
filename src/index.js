import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
import { CartProvider } from './context/dataContext'

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
)
