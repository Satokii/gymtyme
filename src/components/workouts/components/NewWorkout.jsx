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
        reps: '',
        group: ''
    }

    const [form, setForm] = useState(INITIAL_FORM_STATE)

    function handleChange(e) {
        const { name, value } = e.target
        setForm({...form, [name]: value})
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
            {showAddBtn ? <button className='add-exercise-btn grid' onClick={() => {
                handleAddExercise()
                handleShow()
            }}>{toggleAddCancel()}</button> : null}
            {showForm && 
            <div className='add-exercise-form-container grid'>
                <h3>Exercise Details</h3>
                <form className='new-workout-form grid' onSubmit={(e) => handleSubmit(e)}>
                    <div className='add-exercise-input-container'>
                        <label htmlFor="exercise-name">Exercise Name:</label>
                        <input 
                            type="text"
                            id='name'
                            name='name'
                            placeholder='e.g. Bench Press'
                            onChange={e => handleChange(e)}
                            value={form.exercise}
                            required
                        />
                    </div>
                    <div className='add-exercise-input-container'>
                        <label htmlFor="sets">Number of Sets:</label>
                        <input 
                            type="number"
                            id='sets'
                            name='sets'
                            placeholder='e.g. 3'
                            onChange={e => handleChange(e)}
                            value={form.sets}
                            required
                        />   
                    </div>
                    <div className='add-exercise-input-container'>
                        <label htmlFor="reps">Number of Reps:</label>
                        <input 
                            type="number"
                            id='reps'
                            name='reps'
                            placeholder='e.g. 12'
                            onChange={e => handleChange(e)}
                            value={form.reps}
                            required
                        />
                    </div>
                    <div className='add-exercise-input-container'>
                        <label htmlFor="muscle-group">Muscle Group (optional):</label>
                        <input 
                            type="text"
                            id='group'
                            name='group'
                            placeholder='e.g. Chest'
                            onChange={e => handleChange(e)}
                            value={form.group}
                        />
                    </div>
                    <button className='add-exercise-submit-btn' type='submit'>ADD TO WORKOUT</button>
                </form>
                <button className='cancel-add-exercise-btn' onClick={() => handleCancel()}>CANCEL</button>
            </div>}
        </section>
    )
}

export default NewWorkout