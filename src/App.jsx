import { useState, useEffect } from 'react'
import { CAT_FACT_RANDOM, CAT_IMAGE_RANDOM } from './constants'
import './App.css'

function App () {
  const [hecho, setHecho] = useState('-')
  const [image, setImage] = useState(false)

  useEffect(() => {
    fetch(CAT_FACT_RANDOM)
      .then(resp => resp.json())
      .then(data => setHecho(data.fact))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (hecho === '-') return
    const primPal = hecho.split(' ', 3).join(' ')
    setImage(primPal)
  }, [hecho])

  return (
    <main>
      <h1>App de michis</h1>
      <section>
        {hecho && <p>{hecho}</p>}
        {image && <img src={CAT_IMAGE_RANDOM + image + '?width=450&height=450'} />}
      </section>
    </main>
  )
}

export default App
