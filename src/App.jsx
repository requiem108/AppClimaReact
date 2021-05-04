import React from 'react'
import { BrowserRouter as Router,
  Switch, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NofoundPage from './pages/NofoundPage'

const App = () => {
    return (
        <Grid container
          justify ="center"
          direction="row"
          >
            <Grid item             
            xs={12}
            sm={12}
            md={12}
            lg={12}
            >            
            <Router>
              <Switch>
                <Route exact path="/">
                    <WelcomePage/>  
                </Route>
                <Route path="/main">
                    <MainPage/>
                </Route>
                <Route path="/city">
                   <CityPage/>
                </Route>
                <Route>
                  <NofoundPage/>
                </Route>
              </Switch>
            </Router>
            </Grid>           
        </Grid>
    )
}

export default App
