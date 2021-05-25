import { createContext } from 'react'

function noop() {}

export const UserContext = createContext({
  user: null,
  findUser: noop,
  clearUser: noop,
  repos: null
})