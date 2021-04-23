import { Switch, Route, HashRouter } from 'react-router-dom'

import ProductsPage from './pages/product/Products'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="container-fluid" style={{ marginTop: '3rem' }}>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/product" exact render={() => <ProductsPage />} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
