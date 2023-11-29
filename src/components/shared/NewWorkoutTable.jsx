function NewWorkoutTable({ newWorkout, RemoveExercise }) {

    return (
        <table className='workout-table'>
            <thead>
                <tr>
                    <th>Exercise Name</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Muscle Group</th>
                    <th>Remove Exercise</th>
                </tr>
            </thead>
            <tbody>
            {newWorkout.map((exercise, index) =>
                <tr key={`${exercise.name}-${index}`}>
                    <td>{exercise.name}</td>
                    <td>{exercise.sets}</td>
                    <td>{exercise.reps}</td>
                    <td>{exercise.group}</td>
                    <td className='remove-exercise-btn' onClick={() => RemoveExercise(exercise)}>❌</td>
                </tr>   
            )}
            </tbody>
        </table>
    )
}

export default NewWorkoutTable