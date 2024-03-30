import Header from './components/header'
import WelcomePage from './components/welcome-page'
import Home from './components/home'
import Workouts from './components/workouts'
import Exercises from './components/exercises'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ExerciseData from './data/exercise'
import CompletedWorkouts from './components/completed-workouts'
import Profile from './components/profile'

import './App.css'
import './styles/animations.css'
import './styles/btn-rotation.css'

function App() {

  const retrievedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || []
  const location = useLocation()
  const isHome = location.pathname === '/';

  const [exercises, setExercises] = useState(ExerciseData)
  const [newWorkout, setNewWorkout] = useState([])
  const [favourites, setFavourites] = useState([])
  const [currentWorkout, setCurrentWorkout] = useState([])
  const [allWorkouts, setAllWorkouts] = useState(retrievedWorkouts)
  const [showNewWorkout, setShowNewWorkout] = useState(false)
  const [showCurrentWorkout, setShowCurrentWorkout] = useState(false)
  const [toggleShow, setToggleShow] = useState(null)
  const [showPage, setShowPage] = useState(null)

  useEffect(() => {
    if (favourites) {
        localStorage.setItem('favExercises', JSON.stringify(favourites))
    }
  }, [favourites])

  return (
    <>
      <div className='container grid'>
        {!isHome && <Header setShowPage={setShowPage} />}
        <Routes>
          <Route
            path='/home'
            element={<Home />}
          >
          </Route>
          <Route
            path='/'
            element={<WelcomePage />}
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
        {!isHome && <Footer />}
      </div>
    </>
  )
}

export default App
