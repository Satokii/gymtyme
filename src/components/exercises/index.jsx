import { useState } from 'react'
import '../../styles/exercises.css'

function Exercises({ exercises, workoutExercise, setWorkoutExercise }) {

    // const [setsCount, setSetsCount] = useState([])
    // const [repsCount, setRepsCount] = useState([])

    function increaseSet(exercise) {
        const selectedWorkout = workoutExercise.find((workout) => workout.id === exercise.id)
        exercise.sets += 1
        console.log('click')
        console.log(exercise)
        // setWorkoutExercise([...workoutExercise])
    }
    // console.log(workoutExercise)
 
    return (
        <main className="main">
            <section className='exercises-container grid'>
                <h2 className='exercises-header'>Exercise Suggestions</h2>
                <ul className='exercises-list grid'>
                    {exercises.map((exercise, index) =>
                        <li className='exercise-item-container grid' key={`${exercise.id}-${index}`}>
                            <p className='exercise-name'>{exercise.name}</p>
                            <div className='sets-container grid'>
                                <p>Sets</p>
                                <div className='count-container grid'>
                                    <button className='minus-btn grid'>-</button>
                                    <span className='current-val grid'>{exercise.sets}</span>
                                    <button className='add-btn grid' onClick={() => increaseSet(exercise)}>+</button>
                                </div>
                            </div>
                            <div className='reps-container grid'>
                                <p>Reps</p>
                                <div className='count-container grid'>
                                    <button className='minus-btn grid'>-</button>
                                    <span className='current-val grid'>0</span>
                                    <button className='add-btn grid'>+</button>
                                </div>
                            </div>
                            <div className='exercise-btn-container'>
                                <button className='add-to-workout-btn'>Add to Workout</button>
                            </div>
                            <div className='exercise-btn-container'>
                                <button className='add-to-favourites-btn'>Add to Favourites</button>
                            </div>
                        </li> 
                    )}
                </ul>
                
            </section>
        </main>
    )
}

export default Exercises