import "../../styles/exercises.css";

function Exercises({
  exercises,
  setExercises,
  currentWorkout,
  setCurrentWorkout,
  favourites,
  setFavourites,
}) {
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
    setCurrentWorkout([...currentWorkout, exercise]);
  }

  function addToFavourites(exercise) {
    setFavourites([...favourites, exercise]);
  }

  function handleReset(exercise) {
    exercise.sets = 0;
    exercise.reps = 0;
    setExercises([...exercises]);
  }

    return (
        <section className="exercises-container grid">
            <h2 className="exercises-header">Exercise Suggestions</h2>
            <ul className="exercises-list grid">
                {exercises.map((exercise, index) => (
                <li
                    className="exercise-item-container grid"
                    key={`${exercise.id}-${index}`}
                >
                    <p className="exercise-name">{exercise.name}</p>
                    <div className="sets-container grid">
                    <p>Sets</p>
                    <div className="count-container grid">
                        <button
                        className="minus-btn grid"
                        onClick={() => decreaseSet(exercise)}
                        >
                        -
                        </button>
                        <span className="current-val grid">{exercise.sets}</span>
                        <button
                        className="add-btn grid"
                        onClick={() => increaseSet(exercise)}
                        >
                        +
                        </button>
                    </div>
                    </div>
                    <div className="reps-container grid">
                    <p>Reps</p>
                    <div className="count-container grid">
                        <button
                        className="minus-btn grid"
                        onClick={() => decreaseRep(exercise)}
                        >
                        -
                        </button>
                        <span className="current-val grid">{exercise.reps}</span>
                        <button
                        className="add-btn grid"
                        onClick={() => increaseRep(exercise)}
                        >
                        +
                        </button>
                    </div>
                    </div>
                    <div className="exercise-btn-container">
                    <button
                        className="add-to-workout-btn"
                        onClick={() => addToWorkout(exercise)}
                    >
                        Add to Current Workout
                    </button>
                    </div>
                    <div className="exercise-btn-container">
                    <button
                        className="add-to-favourites-btn"
                        onClick={() => addToFavourites(exercise)}
                    >
                        Add to Favourites
                    </button>
                    </div>
                    <div className="reset-container grid">
                    <button
                        className="reset-btn"
                        onClick={() => handleReset(exercise)}
                    >
                        Reset
                    </button>
                    </div>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Exercises;
