import '../../styles/header.css'
import { NavLink } from 'react-router-dom'

function Header() {

    const toggleClassName = ({ isActive }) => (isActive ? "active_link" : "inactive-link");

    return (
        <header className="header grid">
            <h1 className='header-logo'>Logo</h1>
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
                        to="/create-workout"
                    >
                        Create Workout 
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/view-workout"
                        >
                        View Workout
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/exercises"
                        >
                        Exercises
                    </NavLink>
                </div>
            </nav>
            <div className='header-profile'>Profile</div>
        </header>
    )
}

export default Header