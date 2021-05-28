import { useCallback, useEffect, useState } from 'react'
import { getUser, getRepos, getOrganizationMembers } from '../api/api'

export const useUser = () => {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const clearUser = useCallback(() => {
    setUser(null)
    setRepos(null)
    localStorage.removeItem('userData')
    localStorage.removeItem('userRepos')
  }, [])

  const findRepos = useCallback(async (userLogin) => {
    if (typeof userLogin === 'string' && userLogin.length) {
      try {
        const data = await getRepos(userLogin, 1, [])
        localStorage.setItem('userRepos', JSON.stringify(data))
        setRepos(data)
        return data
      } catch (e) {
        return []
      }
    }
  }, [])

  const defineUser = useCallback((data, repos) => {
    setUser(data)
    setRepos(repos)
  }, [])


  const findUser = useCallback(async (userLogin) => {
    clearUser()
    if (typeof userLogin === 'string' && userLogin.length) {
      try {
        const res = await getUser(userLogin)
        const repos = await findRepos(res.data.login)
        if (res.data.type === 'Organization') {
          const members = await getOrganizationMembers(userLogin,  1, [])
          res.data.members = members
        }
        localStorage.setItem('userData', JSON.stringify(res.data))
        defineUser(res.data, repos)
        return res.data
      } catch (e) {
        clearUser()
      }
    }
  }, [clearUser, defineUser, findRepos])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    const repos = JSON.parse(localStorage.getItem('userRepos'))
    if (data && repos) {
      defineUser(data, repos)
    }
  }, [defineUser])

  return { user, repos, findUser, clearUser }
}