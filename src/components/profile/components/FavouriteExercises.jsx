import '../../../styles/profile/favourite-exercises.css'

function FavouriteExercises({ favourites }) {

    return (
        <section className='profile--favourites grid'>
            <h2 className='profile--favourites-header'>Favourite Exercises</h2>
            <div className='profile--favourites-content grid'>
                <div className='profile--favourites-headers grid'>
                    <h3>Exercise</h3>
                    <h3>Sets</h3>
                    <h3>Reps</h3>
                    <h3>Muscle Group</h3>
                    <h3>Add to Workout</h3>
                </div>
                {favourites.map((exercise) => (
                    <div className='profile--favourites-exercises grid' key={exercise.id}>
                        <p>{exercise.name}</p>
                        <p>{exercise.reps}</p>
                        <p>{exercise.sets}</p>
                        <p>{exercise.group}</p>
                        <p>Add</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FavouriteExercises