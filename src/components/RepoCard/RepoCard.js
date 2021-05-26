import React from 'react'
import './RepoCard.css'

export const RepoCard = ({ url, name, description }) => {
  return (
    <div className="repo-card-container">
      <a className="repo-card-link" href={ url } target="_blank" rel="noreferrer">{ name }</a>
      <p className="repo-card-description">{ description }</p>
    </div>
  )
}