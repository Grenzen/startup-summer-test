import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Inform } from '../Inform/Inform'
import { NoDataPage } from '../../pages/NoDataPage/NoDataPage'
import { ReposList } from '../ReposList/ReposList'
import { constants } from '../../constants/constants'
import './UserRepos.css'

import src from '../../assets/icons/empty-icon.svg'
const text = constants.empty.text

export const UserRepos = () => {
  const user = useContext(UserContext)

  if (!user.user) return <NoDataPage />


  if (!user.repos.length) {
    return <Inform className="repos-inform" src={src} text={text} />
  }
  const { repos } = user

  return (
    <div className="repos-container">
      <h1>Repositories ({repos.length})</h1>
      <ReposList repos={repos} />
    </div>
  )
}