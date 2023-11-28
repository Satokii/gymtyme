import Header from './components/header'
import Home from './components/home'
import Workouts from './components/workouts'
import Exercises from './components/exercises'
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ExerciseData from './data/exercise'

function App() {

  const [exercises, setExercises] = useState(ExerciseData)
  const [currentWorkout, setCurrentWorkout] = useState([])
  const [favourites, setFavourites] = useState([])

  // const baseURL = 'https://wger.de/api/v2/exercise/?limit=10&language=2'

  // TODO: INCLUDE A WORKOUT REFRESH BUTTON SO USER CAN CHANGE LIST OF WORKOUTS

  // useEffect(() => {
  //   fetch(baseURL)
  //   .then(res => res.json())
  //   .then(data => setExercises(data.results))
  // }, [])
  
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
            path='/workouts'
            element={<Workouts />}
          >

          </Route>
          <Route
            path='/exercises'
            element={<Exercises exercises={exercises} setExercises={setExercises} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} favourites={favourites} setFavourites={setFavourites} />}
          >
          </Route>
        </Routes>
        <footer className='footer'>Here lies the footer</footer>
      </div>
    </>
  )
}

export default App
