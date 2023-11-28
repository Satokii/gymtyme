import '../../../styles/workouts/new-workout.css'

function NewWorkout() {

    return (
        <section className="create-new-workout grid">
            <h3>Add an exercise to your workout:</h3>
            <form className='new-workout-form'>
                <label htmlFor="exercise-name">
                Exercise Name:
                    <input 
                        type="text"
                        id='exercise-name'
                        name='exercise-name'
                        placeholder='e.g. Bench Press'
                        // onChange={}
                        // value={}
                        required
                    />
                </label>
                <label htmlFor="sets">
                Number of Sets:
                    <input 
                        type="number"
                        id='sets'
                        name='sets'
                        placeholder='e.g. 3'
                        // onChange={}
                        // value={}
                        required
                    />
                </label>
                <label htmlFor="reps">
                Number of Reps:
                    <input 
                        type="number"
                        id='reps'
                        name='reps'
                        placeholder='e.g. 12'
                        // onChange={}
                        // value={}
                        required
                    />
                </label>
                <button type='submit'>Add to Workout</button>
            </form>
        </section>
    )
}

export default NewWorkout