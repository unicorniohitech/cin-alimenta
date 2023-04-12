import React from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'

import { ROUTES } from './routes.ENUM'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={Home} path={ROUTES.HOME} />
      <Route exact component={SignIn} path={ROUTES.SIGNIN} />
      <Route exact component={SignUp} path={ROUTES.SIGNUP} />
    </Switch>
  </BrowserRouter>
)
export default Routes
