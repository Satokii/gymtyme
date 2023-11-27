import { useNavigate } from 'react-router-dom'
import '../../styles/header.css'

function Header() {

    const navigate = useNavigate()

    return (
        <header className="header grid">
            <h1 className='header-logo'>Logo</h1>
            <nav className='header-nav grid'>
                <ul className='header-nav-list grid'>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li>Create Workout</li>
                    <li>View Workout</li>
                    <li onClick={() => navigate('/exercise-suggestions')}>Exercise Suggestions</li>
                </ul>
            </nav>
            <div className='header-profile'>Profile</div>
        </header>
    )
}

export default Header