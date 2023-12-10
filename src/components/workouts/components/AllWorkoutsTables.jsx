function AllWorkoutsTables({ allWorkouts }) {

    return (
        <div className='all-workouts--tables-container grid'>
            {allWorkouts.map((workout, index) => 
                <div key={index}>
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