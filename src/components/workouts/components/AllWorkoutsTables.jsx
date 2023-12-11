import { useEffect } from "react"

function AllWorkoutsTables({ allWorkouts, setAllWorkouts }) {


    function handleDeleteWorkout(workout) {        
        const updatedAllWorkouts = allWorkouts.filter((workoutToDelete) => workoutToDelete !== workout)
        setAllWorkouts(updatedAllWorkouts)
    }

    useEffect(() => {
        localStorage.setItem('savedWorkouts', JSON.stringify(allWorkouts))
    }, [allWorkouts])

    return (
        <div className='all-workouts--tables-container grid'>
            {allWorkouts.map((workout, index) => 
                <div key={index}>
                    <button className="all-workouts--delete-btn" onClick={() => handleDeleteWorkout(workout)}>Delete Workout</button>
                    <table className='all-workouts--tables'>
                        <thead>
                            <tr>
                                <th>Exercise Name</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Muscle Group</th>
                            </tr>
                        </thead>
                        <tbody>
                        {workout.map((exercise, index) =>
                            <tr key={`${exercise.name}-${index}`}>
                                <td>{exercise.name}</td>
                                <td>{exercise.sets}</td>
                                <td>{exercise.reps}</td>
                                <td>{exercise.group}</td>
                            </tr>   
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default AllWorkoutsTables