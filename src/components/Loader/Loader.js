import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './Loader.css'

export const Loader = () => {
  const antIcon = <LoadingOutlined className="loading" spin />

  return (
    <div className="example">
      <Spin indicator={antIcon} />
    </div>
  )
}