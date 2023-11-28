import { useState } from 'react'
import '../../../styles/workouts/new-workout.css'

function NewWorkout({ currentWorkout, setCurrentWorkout }) {

    // DISPLAYING WORKOUT AND FORM
    const [showForm, setShowForm] = useState(false)
    const [showAddBtn, setShowAddBtn] = useState(true)

    function handleAddExercise() {
        setShowForm(!showForm)
    }

    function toggleAddCancel() {
        if (showForm) {
            return 'Cancel'
            
        }
        else {
            return 'Add an exercise'
        }
    }

    function handleShow() {
        setShowAddBtn(false)
    }

    function handleCancel() {
        setShowAddBtn(true)
        setShowForm(false)
    }

    // HANDLING FORM INPUT AND SUBMISSION
    const INITIAL_FORM_STATE = {
        name: '',
        sets: '',
        reps: ''
    }
    const [form, setForm] = useState(INITIAL_FORM_STATE)

    function handleChange(e) {
        const { name, value } = e.target
        setForm({...form, [name]: value})
        console.log(e.target.name)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCurrentWorkout([...currentWorkout, form])
        setForm(INITIAL_FORM_STATE)
        setShowAddBtn(true)
        setShowForm(false)
    }

    return (
        <section className="create-new-workout grid">
            <h3>My Workout</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Exercise Name</th>
                            <th>Number of Sets</th>
                            <th>Number of Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bench Press</td>
                            <td>3</td>
                            <td>12</td>
                        </tr>   
                    </tbody>
                </table>
            </div>
            {showAddBtn ? <button onClick={() => {
                handleAddExercise()
                handleShow()
            }}>{toggleAddCancel()}</button> : null}
            {showForm && 
            <div>
                <h3>Add an exercise to your workout:</h3>
                <form className='new-workout-form' onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="exercise-name">
                    Exercise Name:
                        <input 
                            type="text"
                            id='name'
                            name='name'
                            placeholder='e.g. Bench Press'
                            onChange={e => handleChange(e)}
                            value={form.exercise}
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
                            onChange={e => handleChange(e)}
                            value={form.sets}
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
                            onChange={e => handleChange(e)}
                            value={form.reps}
                            required
                        />
                    </label>
                    <button type='submit'>Add to Workout</button>
                </form>
                <button onClick={() => handleCancel()}>Cancel</button>
            </div>}
            {/* <div>
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
            </div> */}
            
        </section>
    )
}

export default NewWorkout