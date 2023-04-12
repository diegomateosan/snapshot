import { useContext, useCallback } from 'react'
import { SearchContext } from '../context/search'
import { useImages } from '../hooks/useImages'
import debounce from 'just-debounce-it'

export function Search () {
  const { query, setQuery } = useContext(SearchContext)
  const { getImages } = useImages({ query })

  const debounceGetImages = useCallback(debounce((query) => {
    getImages({ query })
  }, 500), [getImages])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    getImages({ query })
  }

  const handleChange = (evt) => {
    const newQuery = evt.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
    debounceGetImages(newQuery)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input onChange={handleChange} value={query} className='search' type='text' placeholder='Everest, superman...' />
      <button>Buscar</button>
    </form>
  )
}
