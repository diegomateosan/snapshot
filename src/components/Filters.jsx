import { useContext } from 'react'
import { useImages } from '../hooks/useImages'
import { SearchContext } from '../context/search'

export function Filters () {
  const { getImages } = useImages({})
  const { setQuery } = useContext(SearchContext)
  const handleClick = (search) => {
    setQuery(search)
    getImages({ query: search })
  }
  return (
    <section className='filters'>
      <button onClick={() => handleClick('naturaleza')}>Naturaleza
      </button>
      <button onClick={() => handleClick('anime')}>Anime</button>
      <button onClick={() => handleClick('libros')}>Libros</button>
      <button onClick={() => handleClick('juegos')}>Juegos</button>
    </section>
  )
}
