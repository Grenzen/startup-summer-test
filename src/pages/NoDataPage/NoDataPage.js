import React from 'react'
import { Header } from '../../components/Header/Header'
import { UserOutlined } from '@ant-design/icons'
import './NoDataPage.css'

export const NoDataPage = () => {
  return (
    <>
      <Header />
      <main className="basic-container no-data-container">
        <UserOutlined className="no-data-icon" />
        <p className="basic-text no-data-text">User not found</p>
      </main>
    </>
  )
}