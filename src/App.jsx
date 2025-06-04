import { useURLCat } from './hooks/useURLCat'
import { useHechoCat } from './hooks/useHechoCat'
import './App.css'

function App () {
  const { hecho, refreshHecho } = useHechoCat()
  const { catUrl } = useURLCat({ hecho })

  return (
    <main>
      <header>
        <h1>App de michis</h1>
        <button onClick={refreshHecho}><i className='fa-solid fa-arrows-rotate' /></button>
      </header>
      <section>
        {hecho && <p>{hecho}</p>}
        {catUrl !== '' && <img src={catUrl} />}
      </section>
    </main>
  )
}

export default App
