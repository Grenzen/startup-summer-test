import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ReactSVG } from 'react-svg'
import { NoDataPage } from '../../pages/NoDataPage/NoDataPage'
import { calculate } from '../../calculate/calculate'

import './UserInfo.css'
import followersSrc from '../../assets/icons/followers-icon.svg'
import followingSrc from '../../assets/icons/following-icon.svg'

export const UserInfo = () => {
  const user = useContext(UserContext)


  if (!user.user) return <NoDataPage />

  const {
    avatar_url,
    html_url,
    login,
    name,
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
        <span>
          <ReactSVG className="follow-icon" src={followersSrc} /> {calculate(followers)} followers
        </span>
        <span>
          <ReactSVG className="follow-icon" src={followingSrc} /> {calculate(following)} following
        </span>
      </div>
    </div>
  )
}