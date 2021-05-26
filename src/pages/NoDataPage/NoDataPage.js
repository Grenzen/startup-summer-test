import React from 'react'
import { Header } from '../../components/Header/Header'
import { Inform } from '../../components/Inform/Inform'
import { constants } from '../../constants/constants'

import src from '../../assets/icons/user-icon.svg'
const text = constants.nodata.text

export const NoDataPage = () => {
  return (
    <>
      <Header />
      <Inform src={src} text={text} />
    </>
  )
}