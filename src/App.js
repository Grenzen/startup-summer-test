import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { useUser } from './hooks/user.hook'
import { UserContext } from './context/UserContext'
import './App.css'

function App() {
  const { user, repos, findUser, clearUser } = useUser()
  const routes = useRoutes()

  return (
    <UserContext.Provider value={{
      user, repos, findUser, clearUser
    }}>
      <Router>
          { routes }
      </Router>
    </UserContext.Provider>
  );
}

export default App;
