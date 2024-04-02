import '../../../styles/profile/favourite-exercises.css'

function FavouriteExercises({ favourites }) {
    console.log(favourites)

    return (
        <section className='profile--favourites grid'>
            <h2>Favourite Exercises</h2>
            <div>
                <div>
                    <h3>Exercise</h3>
                    <h3>Sets</h3>
                    <h3>Reps</h3>
                    <h3>Muscle Group</h3>
                </div>
            </div>
            <div>
                {favourites.map((exercise) => (
                    <div key={exercise.id}>
                        <p>{exercise.name}</p>
                        <p>{exercise.reps}</p>
                        <p>{exercise.sets}</p>
                        <p>{exercise.group}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FavouriteExercises