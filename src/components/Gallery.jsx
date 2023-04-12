
export function Gallery ({ images }) {
  const hasImages = images?.length > 0
  return (
    <main className={hasImages ? 'gallery' : 'gallery-empty'}>
      {hasImages
        ? images.map(photo =>
          <img
            className='gallery-item' key={photo.id} alt={photo.alt_description} src={photo.urls.regular}
          />
        )
        : <p className='no-images'> No hay imágenes que mostrar</p>}
    </main>
  )
}
