import NewWorkoutTable from "../shared/NewWorkoutTable";
import '../../styles/exercises/exercises.css';
import '../../styles/exercises/exercises-filter.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Exercises({ exercises, setExercises, newWorkout, setNewWorkout, favourites, setFavourites, setToggleShow }) {

    const navigate = useNavigate()


    // FILTERS
    const [filter, setFilter] = useState('none')

    const backExercises = exercises.filter((exercise) => exercise.group === 'Back')
    const bicepsExercises = exercises.filter((exercise) => exercise.group === 'Biceps')
    const tricepsExercises = exercises.filter((exercise) => exercise.group === 'Triceps')
    const chestExercises = exercises.filter((exercise) => exercise.group === 'Chest')
    const shouldersExercises = exercises.filter((exercise) => exercise.group === 'Shoulders')
    const legsExercises = exercises.filter((exercise) => exercise.group === 'Legs')

    let filteredExercises

    if (filter === 'Back') filteredExercises = backExercises
    else if (filter === 'Biceps') filteredExercises = bicepsExercises
    else if (filter === 'Triceps') filteredExercises = tricepsExercises
    else if (filter === 'Chest') filteredExercises = chestExercises
    else if (filter === 'Shoulders') filteredExercises = shouldersExercises
    else if (filter === 'Legs') filteredExercises = legsExercises
    else if (filter === 'None') filteredExercises = exercises
    else filteredExercises = exercises

    const [showDropdown, setShowDropdown] = useState(false)

    function toggleDropdown() {
        setShowDropdown(!showDropdown)
    }

    // ADDING EXERCISES TO WORKOUT
    function handleWorkoutNav() {
        setToggleShow('new')
        navigate('/workouts')
        window.scrollTo(0,0)
    }

    function increaseSet(exercise) {
        exercise.sets++;
        setExercises([...exercises]);
    }

    function decreaseSet(exercise) {
        if (exercise.sets > 0) {
        exercise.sets--;
        setExercises([...exercises]);
        }
    }

    function increaseRep(exercise) {
        exercise.reps++;
        setExercises([...exercises]);
    }

    function decreaseRep(exercise) {
        if (exercise.reps > 0) {
        exercise.reps--;
        setExercises([...exercises]);
        }
    }

    function addToWorkout(exercise) {
        const updatedExercise = {...exercise, id: `${exercise.name.split(" ").join("-")}-${Math.random()}`}

        setNewWorkout([...newWorkout, updatedExercise]);
    }

    function addToFavourites(exercise) {
        const updatedExercise = {...exercise, id: `${exercise.name.split(" ").join("-")}-${Math.random()}`}

        setFavourites([...favourites, updatedExercise]);
    }

    function handleReset(exercise) {
        exercise.sets = 0;
        exercise.reps = 0;
        setExercises([...exercises]);
    }

    return (
        <section className="exercises-container grid">
            <div className="workout-preview-container">
                <h2 className="workout-preview-header grid">Workout Preview</h2>
                <button className="workout-preview-workout-btn" onClick={() => handleWorkoutNav()}>See your new workout</button>
                <div className='workout-preview-table'>
                    <NewWorkoutTable newWorkout={newWorkout} setNewWorkout={setNewWorkout} />
                </div>
            </div>
            <div>
                <h2 className="exercises-header">Exercise Suggestions</h2>
                <button className="exercises-dropdown-filter-btn grid" onClick={() => toggleDropdown()}>Filters</button>
                {showDropdown && 
                    <ul className="exercises-dropdown-filter-list">
                        <li onClick={() => setFilter('Back')}>Back</li>
                        <li onClick={() => setFilter('Biceps')}>Biceps</li>
                        <li onClick={() => setFilter('Chest')}>Chest</li>
                        <li onClick={() => setFilter('Legs')}>Legs</li>
                        <li onClick={() => setFilter('Shoulders')}>Shoulders</li>
                        <li onClick={() => setFilter('Triceps')}>Triceps</li>
                        <li onClick={() => setFilter('None')}>Clear Filter</li>
                    </ul>
                }  
                <ul className="exercises-list grid">
                    {filteredExercises.map((exercise, index) => (
                    <li className="exercise-item-container grid" key={`${exercise.id}-${index}`}>
                        <p className="exercise-name">{exercise.name}</p>
                        <div className="sets-container grid">
                            <p>Sets</p>
                            <div className="count-container grid">
                                <button className="minus-btn grid" onClick={() => decreaseSet(exercise)}>-</button>
                                <span className="current-val grid">{exercise.sets}</span>
                                <button className="add-btn grid" onClick={() => increaseSet(exercise)}>+</button>
                            </div>
                        </div>
                        <div className="reps-container grid">
                            <p>Reps</p>
                            <div className="count-container grid">
                                <button className="minus-btn grid" onClick={() => decreaseRep(exercise)}>-</button>
                                <span className="current-val grid">{exercise.reps}</span>
                                <button className="add-btn grid" onClick={() => increaseRep(exercise)}>+</button>
                            </div>
                        </div>
                        <div className="exercise-btn-container grid">
                            <button className="add-to-workout-btn" onClick={() => addToWorkout(exercise)}>Add to New Workout</button>
                        </div>
                        <div className="exercise-btn-container grid">
                            <button className="add-to-favourites-btn" onClick={() => addToFavourites(exercise)}>Add to Favourites</button>
                        </div>
                        <div className="reset-container grid">
                            <button className="reset-btn" onClick={() => handleReset(exercise)}>Reset</button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Exercises;
