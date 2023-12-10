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
import './styles/btn-rotation.css'

function App() {

  const retrievedWorkouts = localStorage.getItem('savedWorkouts')
  const getInitialWorkouts = JSON.parse(retrievedWorkouts) || []
  console.log(getInitialWorkouts)
  // localStorage.clear()

  const [showInitialDisplay, setShowInitialDisplay] = useState(true)
  const [exercises, setExercises] = useState(ExerciseData)
  const [newWorkout, setNewWorkout] = useState([])
  const [favourites, setFavourites] = useState([])
  const [currentWorkout, setCurrentWorkout] = useState([])
  // const [allWorkouts, setAllWorkouts] = useState([])
  const [allWorkouts, setAllWorkouts] = useState(getInitialWorkouts)
  const [showNewWorkout, setShowNewWorkout] = useState(false)
  const [showCurrentWorkout, setShowCurrentWorkout] = useState(false)
  const [toggleShow, setToggleShow] = useState(null)

  console.log('allworkouts', allWorkouts)

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
            element={<Home showInitialDisplay={showInitialDisplay} setShowInitialDisplay={setShowInitialDisplay}/>}
          >
          </Route>
          <Route
            path='/workouts'
            element={<Workouts newWorkout={newWorkout} setNewWorkout={setNewWorkout} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} showNewWorkout={showNewWorkout} setShowNewWorkout={setShowNewWorkout} showCurrentWorkout={showCurrentWorkout} setShowCurrentWorkout={setShowCurrentWorkout} toggleShow={toggleShow} setToggleShow={setToggleShow} />}
          >
          </Route>
          <Route
            path='/exercises'
            element={<Exercises exercises={exercises} setExercises={setExercises} newWorkout={newWorkout} setNewWorkout={setNewWorkout} favourites={favourites} setFavourites={setFavourites} setToggleShow={setToggleShow} />}
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
