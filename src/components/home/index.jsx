import { useNavigate } from 'react-router-dom'
import '../../styles/home.css'

function Home() {

    const navigate = useNavigate()

    return (
        <section className="home grid">
            <h2 className='home-header'>Welcome back!</h2>
            <h3 className='home-what-to-do-header grid'>What would you like to do?</h3>
            <ul className='home-options-list grid'>
                <li onClick={() => navigate('/workouts')}>Go to the workouts page</li>
                <li onClick={() => navigate('/exercises')}>See exercise suggestions</li>
                <li>View your previous workouts</li>
            </ul>
        </section>
    )
}

export default Home