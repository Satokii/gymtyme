import { useState } from 'react'
import NewWorkout from './components/NewWorkout'
import '../../styles/workouts/workouts.css'

function Workouts({ currentWorkout, setCurrentWorkout }) {

    const [toggleShow, setToggleShow] = useState(null)

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
                <p>Choose an option to get started:</p>
            </div>
            <div className='button-options grid'>
                <button onClick={() => toggleNew()}>Create a New Workout</button>
                <button onClick={() => toggleCurrent()}>View Current Workout</button>
                <button onClick={() => toggleAll()}>View All Workouts</button>
            </div>
            <div className='workouts-sections grid'>
                {toggleShow === 'new' && <NewWorkout currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} />}
                {toggleShow === 'current' && <section>Current workout</section>}
                {toggleShow === 'all' && <section>All workouts</section>}
            </div>
        </section>
    )
}

export default Workouts