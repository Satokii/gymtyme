import AllWorkoutsTables from './AllWorkoutsTables'
import '../../../styles/workouts/all-workouts.css'

function AllWorkouts({ allWorkouts, setAllWorkouts }) {

    return (
        <section className='all-workouts--container'>
            <h3>Completed workouts</h3>
            <AllWorkoutsTables allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />
        </section>
    )
}

export default AllWorkouts