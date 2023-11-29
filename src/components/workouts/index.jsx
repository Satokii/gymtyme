import { useState } from 'react'
import NewWorkout from './components/NewWorkout'
import CurrentWorkout from './components/CurrentWorkout'
import '../../styles/workouts/workouts.css'

function Workouts({ newWorkout, setNewWorkout, currentWorkout, setCurrentWorkout }) {

    const [toggleShow, setToggleShow] = useState(null)
    const [showWorkout, setShowWorkout] = useState(false)

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
        <section className='workouts-container grid'>
            <h2 className='workouts-header'>Workouts</h2>
            <div className='workouts-info-container grid'>
                <h3>Welcome to the workouts page.</h3>
                <br />
                <p>Choose an option to get started:</p>
            </div>
            <div className='button-options grid'>
                <button className='create-new-workout-btn' onClick={() => toggleNew()}>Create a New Workout</button>
                <button className='view-current-workout-btn' onClick={() => toggleCurrent()}>View Current Workout</button>
                <button className='view-all-workouts-btn' onClick={() => toggleAll()}>View All Workouts</button>
            </div>
            <div className='workouts-sections grid'>
                {toggleShow === 'new' && <NewWorkout newWorkout={newWorkout} setNewWorkout={setNewWorkout} setCurrentWorkout={setCurrentWorkout} showWorkout={showWorkout} setShowWorkout={setShowWorkout} />}
                {toggleShow === 'current' && <CurrentWorkout currentWorkout={currentWorkout} showWorkout={showWorkout} setShowWorkout={setShowWorkout} />}
                {toggleShow === 'all' && <section>All workouts</section>}
            </div>
        </section>
    )
}

export default Workouts