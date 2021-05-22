import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { InitialPage } from './pages/InitialPage/InitialPage'
import { UserPage } from './pages/UserPage'
import { NoDataPage } from './pages/NoDataPage/NoDataPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/initial">
        <InitialPage />
      </Route>
      <Route path="/user/:id">
        <UserPage />
      </Route>
      <Route path="/nodata">
        <NoDataPage />
      </Route>
      <Redirect to="/initial" />
    </Switch>
  )
}