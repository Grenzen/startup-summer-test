import React from 'react'
import { Header } from '../../components/Header/Header'
import { Inform } from '../../components/Inform/Inform'
import { constants } from '../../constants/constants'

import src from '../../assets/icons/search-icon.svg'
const text = constants.initial.text


export const InitialPage = () => {
  return (
    <>
      <Header />
      <Inform src={src} text={text} />
    </>
  )
}