import { useCatImage } from '../hooks/useCatFact'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  console.log(imageUrl)
  return (
    <>
      {imageUrl && <img src={imageUrl} alt='image extracted using the first three words for' />}
    </>
  )
}
