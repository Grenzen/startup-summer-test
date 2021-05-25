import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { InitialPage } from './pages/InitialPage/InitialPage'
import { UserPage } from './pages/UserPage/UserPage'
import { NoDataPage } from './pages/NoDataPage/NoDataPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/initial" exact>
        <InitialPage />
      </Route>
      <Route path="/nodata" exact>
        <NoDataPage />
      </Route>
      <Route path="/user/:id">
        <UserPage />
      </Route>
      <Redirect to="/initial" />
    </Switch>
  )
}