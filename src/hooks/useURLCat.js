import { CAT_IMAGE_RANDOM } from '../constants'
import { useEffect, useState } from 'react'

export function useURLCat ({ hecho }) {
  const [image, setImage] = useState(false)
  useEffect(() => {
    if (hecho === '-') return
    const primPal = hecho.split(' ', 3).join(' ')
    setImage(primPal)
  }, [hecho])
  const catUrl = !image ? '' : CAT_IMAGE_RANDOM + image + '?width=450&height=450'
  console.log(hecho + ' |-| ' + catUrl)
  return { catUrl }
}
