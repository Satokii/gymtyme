import '../../styles/exercises.css'

function Exercises({ exercises }) {

    return (
        <main className="main">
            <section className='exercises-container grid'>
                <h2 className='exercises-header'>Exercise Suggestions</h2>
                <ul className='exercises-list grid'>
                    {exercises.map((exercise, index) =>
                        <li className='exercise-item-container grid' key={`${exercise.id}-${index}`}>
                            <p className='exercise-name'>{exercise.name}</p>
                            <div className='exercise-btn-container'>
                                <button className='add-to-workout-btn'>Add to Workout</button>
                            </div>
                            <div className='exercise-btn-container'>
                                <button className='add-to-favourites-btn'>Add to Favourites</button>
                            </div>
                        </li> 
                    )}
                </ul>
                
            </section>
        </main>
    )
}

export default Exercises