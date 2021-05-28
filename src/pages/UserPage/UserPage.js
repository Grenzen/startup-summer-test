import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { UserInfo } from '../../components/UserInfo/UserInfo'
import { UserRepos } from '../../components/UserRepos/UserRepos'
import { UserContext } from '../../context/UserContext'
import { Loader } from '../../components/Loader/Loader'
import './UserPage.css'


export const UserPage = () => {
  const data = useContext(UserContext)
  const { user, repos } = data
  console.log(user, repos)

  return (
    <>
      <Header />
      <main className="user-container">
        <section className="user-info-container">
          { user ? <UserInfo /> : <Loader />  }
        </section>
        <section className="user-repos-container">
          { repos ? <UserRepos /> : <Loader /> }
        </section>
      </main>
    </>
  )
}