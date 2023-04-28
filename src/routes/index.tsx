import React from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Client from '@/pages/Client'
import Restaurant from '@/pages/Restaurant'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'

import { ROUTES } from './routes.ENUM'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={Client} path={ROUTES.CLIENT} />
      <Route exact component={Restaurant} path={ROUTES.RESTAURANT} />
      <Route exact component={SignIn} path={ROUTES.SIGNIN} />
      <Route exact component={SignUp} path={ROUTES.SIGNUP} />
    </Switch>
  </BrowserRouter>
)
export default Routes
