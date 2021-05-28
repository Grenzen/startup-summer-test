import React from 'react'
import { ReactSVG } from 'react-svg'

import followersSrc from '../../assets/icons/followers-icon.svg'
import followingSrc from '../../assets/icons/following-icon.svg'

export const Follow = ({ followers, following }) => {
  return (
    <>
      <span>
        <ReactSVG className="follow-icon" src={followersSrc} /> {followers} followers
      </span>
      <span>
        <ReactSVG className="follow-icon" src={followingSrc} /> {following} following
      </span>
    </>
  )
}