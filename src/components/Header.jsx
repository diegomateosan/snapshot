import { Filters } from './Filters'
import { Search } from './Search'

export function Header () {
  console.log('render here')
  return (
    <header>
      <h1>¡Busca una imagen!</h1>
      <Filters />
      <Search />
    </header>
  )
}
