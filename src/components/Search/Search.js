import React from 'react'
import { GithubOutlined } from '@ant-design/icons'
import './Search.css'

export const Search = () => {
  return (
    <div className="search-container">
      <GithubOutlined className="logo" />
      <input
        className="search"
        type="text"
        placeholder="Enter GitHub username"
      />
    </div>
  )
}