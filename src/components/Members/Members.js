import React from 'react'
import { ReactSVG } from 'react-svg'

import followersSrc from '../../assets/icons/followers-icon.svg'

export const Members = ({ members }) => {
  return (
    <>
      <span>
        <ReactSVG className="follow-icon" src={followersSrc} /> {members} members
      </span>
    </>
  )
}