import React from 'react'
import { Header } from '../../components/Header/Header'
import { Inform } from '../../components/Inform/Inform'
import src from '../../assets/icons/search-icon.svg'
const text = 'Start with searching a GitHub user'


export const InitialPage = () => {
  return (
    <>
      <Header />
      <Inform src={src} text={text} />
    </>
  )
}