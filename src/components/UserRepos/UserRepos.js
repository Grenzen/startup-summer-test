import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Inform } from '../Inform/Inform'
import { NoDataPage } from '../../pages/NoDataPage/NoDataPage'
import './UserRepos.css'

import src from '../../assets/icons/empty-icon.svg'
const text = 'Repository list is empty'

export const UserRepos = () => {
  const user = useContext(UserContext)
  console.log(user)

  if (!user.user) return <NoDataPage />


  if (!user.repos.length) {
    return <Inform className="repos-inform" src={src} text={text} />
  }
  return (
    <>
      <h1>Repositories ({user.repos.length})</h1>
    </>
  )
}