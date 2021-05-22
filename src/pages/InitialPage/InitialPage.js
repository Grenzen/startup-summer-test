import React from 'react'
import { Header } from '../../components/Header/Header'
import './InitialPage.css'

export const InitialPage = () => {
  return (
    <>
      <Header />
      <main className="basic-container initial-container">
        <p className="basic-text initial-text">
          Start with searching a GitHub user
        </p>
      </main>
    </>
  )
}