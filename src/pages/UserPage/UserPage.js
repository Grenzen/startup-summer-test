import React from 'react'
import { Header } from '../../components/Header/Header'
import { UserInfo } from '../../components/UserInfo/UserInfo'
import { UserRepos } from '../../components/UserRepos/UserRepos'
import { useUser } from '../../hooks/user.hook'
import { Loader } from '../../components/Loader/Loader'
import './UserPage.css'


export const UserPage = () => {
  const { ready } = useUser()

  return (
    <>
      <Header />
      <main className="user-container">
        <section className="user-info-container">
          { ready ? <UserInfo /> : <Loader />  }
        </section>
        <section className="user-repos-container">
          { ready ? <UserRepos /> : <Loader /> }
        </section>
      </main>
    </>
  )
}