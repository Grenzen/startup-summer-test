import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GithubOutlined } from '@ant-design/icons'
import { UserContext } from '../../context/UserContext'
import './Search.css'

export const Search = () => {
  const user = useContext(UserContext)
  const history = useHistory()
  const [userLogin, setUserLogin] = useState('')

  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const res = await user.findUser(userLogin)
        history.push(`/user/${res.login}`)
      } catch (e) {
        history.push(`/nodata`)
        user.clearUser()
      }
    }
  }

  return (
    <div className="search-container">
      <GithubOutlined className="logo" />
      <input
        className="search"
        type="text"
        placeholder="Enter GitHub username"
        onChange={e => setUserLogin(e.target.value)}
        onKeyDown={pressHandler}
      />
    </div>
  )
}