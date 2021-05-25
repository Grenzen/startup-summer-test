import { useCallback, useEffect, useState } from 'react'
import { getUser, getRepos } from '../api/api'

export const useUser = () => {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)
  const [repos, setRepos] = useState(null)

  const clearUser = useCallback(() => {
    setUser(null)
    setRepos(null)
    localStorage.removeItem('userData')
    localStorage.removeItem('userRepos')
  }, [])

  const findRepos = useCallback(async (userLogin) => {
    try {
      const res = await getRepos(userLogin)
      const { data } = res
      const reposArr = data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          url: item.html_url,
          description: item.description || null
        }
      })
      localStorage.setItem('userRepos', JSON.stringify(reposArr))
      setRepos(reposArr)
      return reposArr
    } catch (e) {
      return []
    }
  }, [])

  const defineUser = useCallback((data, repos) => {
    setUser(data)
    setRepos(repos)
  }, [])


  const findUser = useCallback(async (userLogin) => {
    try {
      const res = await getUser(userLogin)
      const { data } = res
      localStorage.setItem('userData', JSON.stringify(data))
      const repos = findRepos(data.login)
      defineUser(data, repos)
      return data
    } catch (e) {
      clearUser()
    }
  }, [clearUser, defineUser, findRepos])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    const repos = JSON.parse(localStorage.getItem('userRepos'))
    if (data && repos) {
      defineUser(data, repos)
    }
    setReady(true)
  }, [defineUser])

  return { user, repos, findUser, clearUser, ready }
}