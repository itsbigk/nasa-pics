export const FETCH_DATA = 'FETCH_DATA'

export const fetchData = () => dispatch => {
  const API_KEY = 'R88qxbhUYdhLZb1tnY7lSukMlXloeWGMXKSNvsM6'
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(res => dispatch({ type: FETCH_DATA, payload: res }))
}
