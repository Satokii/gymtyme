import { useEffect, useState } from 'react'
import '../../../styles/workouts/current-workout.css'

function CurrentWorkout({ currentWorkout, setCurrentWorkout, showWorkout, setShowWorkout, allWorkouts, setAllWorkouts }) {

    const [showWorkoutHint, setShowWorkoutHint] = useState(true)

        useEffect(() => {
            if (currentWorkout.length > 0) {
                setShowWorkoutHint(false)
                setShowWorkout(true)
               }
        }, [currentWorkout, setShowWorkout])  
        
        function handleSave() {
            setAllWorkouts([...allWorkouts, [...currentWorkout]])
        }

        console.log(allWorkouts)

        function handleDelete() {
            setCurrentWorkout([])
            setShowWorkoutHint(true)
            setShowWorkout(false)
        }

    return (
        <section className="current-workout--container grid">
            <h3>Current Workout</h3>
            {showWorkoutHint ? <p>Oops, it looks like you don't have a current workout. <br /> Create a new workout and add it to your current workout to begin</p> : null}
            {showWorkout ? 
            <div className='current-workout--workout-table grid'>
                <table className='workout-table'>
                    <thead>
                        <tr>
                            <th>Exercise Name</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Muscle Group</th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentWorkout.map((workout, index) =>
                        <tr key={`${workout.name}-${index}`}>
                            <td>{workout.name}</td>
                            <td>{workout.sets}</td>
                            <td>{workout.reps}</td>
                            <td>{workout.group}</td>
                        </tr>   
                     )}
                    </tbody>
                </table>
                <div className='current-workout--btns-container grid'>
                    <button className='current-workout--complete-btn' onClick={() => handleSave()}>Complete and save workout</button>
                    <button className='current-workout--delete-btn' onClick={() => handleDelete()}>Delete workout</button>
                </div>
            </div>
            : null}
        </section>
    )
}

export default CurrentWorkout