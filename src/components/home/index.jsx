import '../../styles/home.css'

function Home() {

    return (
        <section className="home grid">
            <h2 className='home-header'>Welcome back</h2>
            <h3 className='home-what-to-do-header'>What would you like to do?</h3>
            <ul className='home-options-list grid'>
                <li>Create a new workout</li>
                <li>View your current workout</li>
                <li>Exercise suggestions</li>
                <li>See your previous workouts</li>
            </ul>
        </section>
    )
}

export default Home