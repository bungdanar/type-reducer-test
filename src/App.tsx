import { Switch, Route, HashRouter } from 'react-router-dom'

import { unstable_createMuiStrictModeTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import 'moment/locale/id'

import ProductsPage from './pages/product/Products'
import Home from './pages/home/Home'
import FormPage from './pages/form/Form'

import 'bootstrap/dist/css/bootstrap.min.css'
import RencanaPage from './pages/rencana/Rencana'

function App() {
  const defaulMaterialTheme = unstable_createMuiStrictModeTheme({
    palette: {
      primary: {
        main: '#16a085',
      },
    },
  })

  return (
    <ThemeProvider theme={defaulMaterialTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="container-fluid" style={{ marginTop: '3rem' }}>
          <HashRouter>
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              <Route path="/product" exact render={() => <ProductsPage />} />
              <Route path="/form" exact render={() => <FormPage />} />
              <Route path="/rencana" exact render={() => <RencanaPage />} />
            </Switch>
          </HashRouter>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
