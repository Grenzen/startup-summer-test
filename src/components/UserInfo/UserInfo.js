import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Follow } from '../Follow/Follow'
import { Members } from '../Members/Members'

import { calculate } from '../../calculate/calculate'

import './UserInfo.css'

export const UserInfo = () => {
  const user = useContext(UserContext)

  const {
    avatar_url,
    html_url,
    login,
    name,
    type,
    followers,
    following
  } = user.user

  return (
    <div>
      <img
        className="avatar"
        src={ avatar_url }
        alt="avatar"
      />
      <h1 className="user-name">{ name }</h1>
      <a
        className="user-link"
        href={ html_url }
        target="_blank"
        rel="noreferrer"
      >
        { login }
      </a>
      <div className="follow-container">
        { type === 'User' ?
          <Follow followers={calculate(followers)} following={calculate(following)} /> :
          <Members members={calculate(user.user.members)} />
        }
      </div>
    </div>
  )
}