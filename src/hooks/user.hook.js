import { useCallback, useEffect, useState } from 'react'
import { getUser, getRepos } from '../api/api'

export const useUser = () => {
  const [user, setUser] = useState(null)
  const [readyUser, setReadyUser] = useState(false)
  const [readyRepos, setReadyRepos] = useState(false)
  const [repos, setRepos] = useState(null)

  const clearUser = useCallback(() => {
    setUser(null)
    setRepos(null)
    localStorage.removeItem('userData')
    localStorage.removeItem('userRepos')
  }, [])

  const findRepos = useCallback(async (userLogin) => {
    try {
      console.log('findRepos')
      const data = await getRepos(userLogin, 1, [])
      console.log(data)
      localStorage.setItem('userRepos', JSON.stringify(data))
      setRepos(data)
      return data
    } catch (e) {
      console.log('catch')
      return []
    }
  }, [])

  const defineUser = useCallback((data, repos) => {
    setUser(data)
    setRepos(repos)
  }, [])


  const findUser = useCallback(async (userLogin) => {
    try {
      console.log('findUser')
      setReadyUser(false)
      setReadyRepos(false)
      console.log(readyRepos, readyUser)
      const res = await getUser(userLogin)
      const repos = await findRepos(res.data.login)
      localStorage.setItem('userData', JSON.stringify(res.data))
      defineUser(res.data, repos)
      return res.data
    } catch (e) {
      clearUser()
    }
  }, [clearUser, defineUser, findRepos])

  useEffect(() => {
    console.log('useEffect')
    const data = JSON.parse(localStorage.getItem('userData'))
    const repos = JSON.parse(localStorage.getItem('userRepos'))
    if (data && repos) {
      defineUser(data, repos)
    }
    setReadyUser(true)
    setReadyRepos(true)
  }, [defineUser])

  return { user, repos, findUser, clearUser, readyUser, readyRepos }
}