import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import { RepoCard } from '../RepoCard/RepoCard'
import './ReposList.css'

export const ReposList = ({ repos }) => {
  const pageSize = 4
  const [current, setCurrent] = useState(1)
  const [minIndex, setMinIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)

  useEffect(() => {
    setMinIndex(0)
    setMaxIndex(pageSize)
  }, [repos.length])

  const handleChange = (page) => {
    setCurrent(page)
    setMinIndex((page - 1) * pageSize)
    setMaxIndex(page * pageSize)
  }

  return (
    <div className="repos-list-container">
      <div>
        {
          repos.map((repo, index) => {
            return index >= minIndex &&
            index < maxIndex && (
              <RepoCard url={repo.url} name={repo.name} description={repo.description} key={repo.id} />
          )})
        }
      </div>
      <Pagination
        className="repos-list-pagination"
        defaultPageSize={pageSize}
        current={current}
        total={repos.length}
        onChange={handleChange}
        showTotal={(total, range) => `${range[0]} - ${range[1]} of ${total} items`}
      />
    </div>
  )
}