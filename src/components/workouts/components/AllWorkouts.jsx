import AllWorkoutsTables from './AllWorkoutsTables'
import '../../../styles/workouts/all-workouts.css'

function AllWorkouts({ allWorkouts }) {

    return (
        <section className='all-workouts--container'>
            <h3>Completed workouts</h3>
            <AllWorkoutsTables allWorkouts={allWorkouts} />
        </section>
    )
}

export default AllWorkouts