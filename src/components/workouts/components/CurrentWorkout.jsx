import '../../../styles/workouts/current-workout.css'

function CurrentWorkout({ currentWorkout }) {

    return (
        <section className="current-workout-container grid">
            <h3>Current Workout</h3>
            <div className='current-workout--workout-table'>
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
            </div>
        </section>
    )
}

export default CurrentWorkout