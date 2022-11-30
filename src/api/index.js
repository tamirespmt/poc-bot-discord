const axios = require('axios')

const api = axios.create({
  headers: {
    "Accept": "application/json"
  }
})

const dadJokesApi = axios.create({
  baseURL: 'https://icanhazdadjoke.com',
  headers: {
    "Accept": "application/json"
  }
})

module.exports = {
  api,
  dadJokesApi
} 
