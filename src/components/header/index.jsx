import '../../styles/header.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()
    const toggleClassName = ({ isActive }) => (isActive ? "active_link" : "inactive-link");

    return (
        <header className="header grid">
            <h1 className='header-logo' onClick={() => {
                window.scrollTo(0, 100)
                navigate('/')
            }}>
                <span>G</span>
                <span>y</span>
                <span>m</span>
                <span>T</span>
                <span>y</span>
                <span>m</span>
                <span>e</span>
            </h1>
            <nav className='header-nav grid'>
                <div className='header-nav-list grid'>
                    <NavLink
                        className={toggleClassName}
                        to="/"
                        onClick={() => window.scrollTo(0, 100)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/workouts"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Workouts
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/exercises"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Exercises
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to='/completed-workouts'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Completed Workouts
                    </NavLink>
                </div>
            </nav>
            <div className='header-profile grid' onClick={() => {
                window.scrollTo(0, 0)
                navigate('/profile')
            }}>Profile</div>
        </header>
    )
}

export default Header