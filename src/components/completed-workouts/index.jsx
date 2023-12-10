import AllWorkoutsTables from '../workouts/components/AllWorkoutsTables'
import '../../styles/completed-workouts.css'

function CompletedWorkouts({ allWorkouts }) {

    return (
        <section className="completed-workouts--container grid">
            <div className="completed-workouts--header-container">
                <h2 className="completed-workouts--header">Completed Workouts</h2>
            </div>
            <div className="completed-workouts--content-container">
                <AllWorkoutsTables allWorkouts={allWorkouts} />
            </div>
        </section>
    )
}

export default CompletedWorkouts