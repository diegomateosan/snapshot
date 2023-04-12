import { useCallback, useRef, useContext } from 'react'

import { searchImages } from '../services/searchImages'

import { ImagesContext } from '../context/images'

export function useImages ({ query }) {
  const { images, setImages } = useContext(ImagesContext)
  const previousSearch = useRef(query)

  const getImages = useCallback(async ({ query }) => {
    if (query === previousSearch.current) return
    try {
      previousSearch.current = query
      const newImages = await searchImages({ query })
      setImages(newImages)
    } catch (error) {
      throw new Error('Error while retrieving images')
    }
  }, [])

  return { images, getImages }
}
