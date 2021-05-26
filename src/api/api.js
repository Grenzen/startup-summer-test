import * as axios from 'axios'

export const getUser = user => {
  return axios.get(`https://api.github.com/users/${user}`)
}

export const getRepos = async (user, counter, midArr) => {
  try {
    const res = await getAllRepos(user, counter)
    if (res.data.length) {
      counter++
      const reposArr = res.data.map(_extractItems)
      midArr = [...midArr, ...reposArr]
      return await getRepos(user, counter, midArr)
    } else {
      return midArr
    }
  } catch (e) {}
}

const getAllRepos = async (user, counter) => {
  const res = await axios.get(`https://api.github.com/users/${user}/repos?per_page=100;page=${counter}`)
  return res
}

const _extractItems = (item) => {
  return {
    id: item.id,
    name: item.name,
    url: item.html_url,
    description: item.description || 'repository has no description'
  }
}