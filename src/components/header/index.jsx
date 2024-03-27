import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './components/logo';
import '../../styles/header.css';

function Header({ setShowPage }) {
    const navigate = useNavigate();
    const toggleClassName = ({ isActive }) => (isActive ? "active_link" : "inactive-link");

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        window.scrollTo(0, 0);
    };

    return (
        <header className="header grid">
            <Logo />
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav className={`header-nav grid ${isOpen ? 'open' : ''}`}>
                <div className='header-nav-list grid'>
                    <NavLink
                        className={toggleClassName}
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/workouts"
                        onClick={closeMenu}
                    >
                        Workouts
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to="/exercises"
                        onClick={closeMenu}
                    >
                        Exercises
                    </NavLink>
                    <NavLink
                        className={toggleClassName}
                        to='/completed-workouts'
                        onClick={closeMenu}
                    >
                        Completed Workouts
                    </NavLink>
                </div>
            </nav>
            <div className='header-profile grid' onClick={() => {
                window.scrollTo(0, 0);
                navigate('/profile');
                setShowPage('profile');
            }}>Profile</div>
        </header>
    )
}

export default Header;
