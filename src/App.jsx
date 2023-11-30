import Header from './components/header'
import Home from './components/home'
import Workouts from './components/workouts'
import Exercises from './components/exercises'
import Footer from './components/footer'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ExerciseData from './data/exercise'
import Profile from './components/profile'

import './App.css'
import './styles/animations.css'

function App() {

  const [exercises, setExercises] = useState(ExerciseData)
  const [newWorkout, setNewWorkout] = useState([])
  const [favourites, setFavourites] = useState([])
  const [currentWorkout, setCurrentWorkout] = useState([])
  const [allWorkouts, setAllWorkouts] = useState([])
  const [showNewWorkout, setShowNewWorkout] = useState(false)
  const [showCurrentWorkout, setShowCurrentWorkout] = useState(false)

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
            element={<Workouts newWorkout={newWorkout} setNewWorkout={setNewWorkout} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} showNewWorkout={showNewWorkout} setShowNewWorkout={setShowNewWorkout} showCurrentWorkout={showCurrentWorkout} setShowCurrentWorkout={setShowCurrentWorkout} />}
          >
          </Route>
          <Route
            path='/exercises'
            element={<Exercises exercises={exercises} setExercises={setExercises} newWorkout={newWorkout} setNewWorkout={setNewWorkout} favourites={favourites} setFavourites={setFavourites} />}
          >
          </Route>
          <Route
            path='/profile'
            element={<Profile newWorkout={newWorkout} setNewWorkout={setNewWorkout} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showNewWorkout={showNewWorkout} setShowNewWorkout={setShowNewWorkout} showCurrentWorkout={showCurrentWorkout} setShowCurrentWorkout={setShowCurrentWorkout} allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />}
          >
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
