import NewWorkout from './components/NewWorkout'
import CurrentWorkout from './components/CurrentWorkout'
import AllWorkouts from './components/AllWorkouts'
import '../../styles/workouts/workouts.css'
import { createContext } from 'react'

function Workouts({ newWorkout, setNewWorkout, currentWorkout, setCurrentWorkout, allWorkouts, setAllWorkouts, showNewWorkout, setShowNewWorkout, showCurrentWorkout, setShowCurrentWorkout, toggleShow, setToggleShow }) {

    const WorkoutsContext = createContext()

    function toggleNew() {
        setToggleShow('new')
    }
    function toggleCurrent() {
        setToggleShow('current')
    }
    function toggleAll() {
        setToggleShow('all')
    }

    return (
        <WorkoutsContext.Provider value={toggleAll} >
        <section className='workouts-container grid'>
            <div className='workouts-content grid'>
                <h2 className='workouts-header'>Workouts</h2>
                <div className='workouts-info-container grid'>
                    <h3>Welcome to the workouts page.</h3>
                    <p>Here you'll find a quick overview of all workout options.</p>
                    <br />
                    <p>Choose an option to get started:</p>
                </div>
                <div className='button-options grid'>
                    <button className='create-new-workout-btn' onClick={() => toggleNew()}>Create a New Workout</button>
                    <button className='view-current-workout-btn' onClick={() => toggleCurrent()}>View Current Workout</button>
                    <button className='view-all-workouts-btn' onClick={() => toggleAll()}>View Completed Workouts</button>
                </div>
                <div className='workouts-sections grid'>
                    {toggleShow === 'new' && <NewWorkout newWorkout={newWorkout} setNewWorkout={setNewWorkout} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showNewWorkout={showNewWorkout} setShowNewWorkout={setShowNewWorkout} />}
                    {toggleShow === 'current' && <CurrentWorkout currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showCurrentWorkout={showCurrentWorkout} setShowCurrentWorkout={setShowCurrentWorkout} allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />}
                    {toggleShow === 'all' && <AllWorkouts allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />}
                </div>
            </div>
        </section>
        </WorkoutsContext.Provider>
    )
}

export { Workouts, WorkoutsContext }