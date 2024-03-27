import Header from './components/header'
import Home from './components/home'
import Workouts from './components/workouts'
import Exercises from './components/exercises'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ExerciseData from './data/exercise'
import CompletedWorkouts from './components/completed-workouts'
import Profile from './components/profile'

import './App.css'
import './styles/animations.css'
import './styles/btn-rotation.css'

function App() {

  const retrievedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || []

  const [showInitialDisplay, setShowInitialDisplay] = useState(true)
  const [exercises, setExercises] = useState(ExerciseData)
  const [newWorkout, setNewWorkout] = useState([])
  const [favourites, setFavourites] = useState([])
  const [currentWorkout, setCurrentWorkout] = useState([])
  const [allWorkouts, setAllWorkouts] = useState(retrievedWorkouts)
  const [showNewWorkout, setShowNewWorkout] = useState(false)
  const [showCurrentWorkout, setShowCurrentWorkout] = useState(false)
  const [toggleShow, setToggleShow] = useState(null)
  const [showPage, setShowPage] = useState(null)

  return (
    <>
      <div className='container grid'>
        <Header setShowPage={setShowPage} showInitialDisplay={showInitialDisplay} />
        <Routes>
          <Route
            path='/home'
            element={<Home showInitialDisplay={showInitialDisplay} setShowInitialDisplay={setShowInitialDisplay} />}
          >
          </Route>
          <Route
            path='/'
            element={<Home showInitialDisplay={showInitialDisplay} setShowInitialDisplay={setShowInitialDisplay} />}
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
            path='/completed-workouts'
            element={<CompletedWorkouts allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />}
          >
          </Route>
          <Route
            path='/profile'
            element={<Profile newWorkout={newWorkout} setNewWorkout={setNewWorkout} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showNewWorkout={showNewWorkout} setShowNewWorkout={setShowNewWorkout} showCurrentWorkout={showCurrentWorkout} setShowCurrentWorkout={setShowCurrentWorkout} allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} showPage={showPage} setShowPage={setShowPage} />}
          >
          </Route>
        </Routes>
        <Footer showInitialDisplay={showInitialDisplay} />
      </div>
    </>
  )
}

export default App
