import { useContext } from 'react'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { ImagesContext } from './context/images'
import { Footer } from './components/Footer'

function App () {
  const { images } = useContext(ImagesContext)
  return (
    <div className='app'>
      <Header />
      <Gallery images={images} />
      <Footer />
    </div>
  )
}

export default App
