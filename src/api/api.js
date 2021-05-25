import * as axios from 'axios'

export const getUser = user => {
  return axios.get(`https://api.github.com/users/${user}`)
}

export const getRepos = user => {
  return axios.get(`https://api.github.com/users/${user}/repos`)
}