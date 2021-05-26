import React from 'react'
import { Spin } from 'antd'
import './Loader.css'

export const Loader = () => {
  return (
    <div className="example">
      <Spin size="large" />
    </div>
  )
}