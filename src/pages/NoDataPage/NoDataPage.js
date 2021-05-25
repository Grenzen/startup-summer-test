import React from 'react'
import { Header } from '../../components/Header/Header'
import { Inform } from '../../components/Inform/Inform'
import src from '../../assets/icons/user-icon.svg'
const text = 'User not found'

export const NoDataPage = () => {
  return (
    <>
      <Header />
      <Inform src={src} text={text} />
    </>
  )
}