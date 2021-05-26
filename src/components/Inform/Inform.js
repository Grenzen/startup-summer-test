import React from 'react'
import { ReactSVG } from 'react-svg'

export const Inform = ({ src, text }) => {
  return (
    <div className="basic-container">
      <ReactSVG src={src} />
      <p className="basic-text">
        { text }
      </p>
    </div>
  )
}