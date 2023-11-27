import Header from './components/header'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [workout, setWorkout] = useState([])

  // INCLUDE A WORKOUT REFRESH BUTTON SO USER CAN CHANGE LIST OF WORKOUTS

  useEffect(() => {
    fetch('https://wger.de/api/v2/exercise/')
    .then(res => res.json())
    .then(data => setWorkout(data.results))
  }, [])
  
workout.map(y => console.log(y.name))

  return (
    <>
      <div className='container grid'>
        <Header />
        <main>I am the main</main>
        <footer>Here lies the footer</footer>
      </div>
    </>
  )
}

export default App
