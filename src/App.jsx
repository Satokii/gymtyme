import Header from './components/header'
import Home from './components/home'
import CreateWorkout from './components/create-workout'
import ViewWorkout from './components/view-workout'
import Exercises from './components/exercises'
import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  const baseURL = 'https://wger.de/api/v2/exercise/?limit=10&language=2'

  //  root for filtering by specific muscle group and equipment: 'https://wger.de/api/v2/exercise?muscles=1&equipment=3&language=0'

  const [exercises, setExercises] = useState([])

  // TODO: INCLUDE A WORKOUT REFRESH BUTTON SO USER CAN CHANGE LIST OF WORKOUTS

  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => setExercises(data.results))
  }, [])

  if (!exercises) return <p>Loading exercises...</p>
  
  return (
    <>
      <div className='container grid'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          >
          </Route>
          <Route
            path='/create-workout'
            element={<CreateWorkout />}
          >
          </Route>
          <Route
            path='/view-workout'
            element={<ViewWorkout />}
          >

          </Route>
          <Route
            path='/exercises'
            element={<Exercises exercises={exercises} />}
          >
          </Route>
        </Routes>
        <footer className='footer'>Here lies the footer</footer>
      </div>
    </>
  )
}

export default App
