const BASE_URL = 'https://api.unsplash.com/search/photos?page=1&query='

export async function searchImages ({ query }) {
  if (query === '') return null
  try {
    const response = await fetch(`${BASE_URL}${query}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Client-ID YUpepAhzpFEg79b19fce0Glly-0cKI85JAn5mPN1gOo'
      }
    })
    const data = await response.json()
    const images = data.results
    return images
  } catch (error) {
    throw new Error('Error searching images')
  }
}
