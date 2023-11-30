import '../../styles/header.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()
    const toggleClassName = ({ isActive }) => (isActive ? "active_link" : "inactive-link");

    return (
        <header className="header grid">
            <h1 className='header-logo' onClick={() => navigate('/')}>GymTyme</h1>
            <nav className='header-nav grid'>
                <div className='header-nav-list grid'>
                    <NavLink
                        className={toggleClassName}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/workouts"
                        >
                        Workouts
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/exercises"
                        >
                        Exercises
                    </NavLink>
                </div>
            </nav>
            <div className='header-profile grid' onClick={() => navigate('/profile')}>Profile</div>
        </header>
    )
}

export default Header