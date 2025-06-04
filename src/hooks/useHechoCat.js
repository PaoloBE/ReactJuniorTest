import { useEffect, useState } from 'react'
import { getHecho } from '../services/hecho'
export const useHechoCat = () => {
  const [hecho, setHecho] = useState('-')
  const refreshHecho = () => { getHecho().then(setHecho) }
  useEffect(refreshHecho, [])

  return { hecho, refreshHecho }
}
