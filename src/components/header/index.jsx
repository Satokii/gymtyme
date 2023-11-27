import '../../styles/header.css'

function Header() {

    return (
        <header className="header grid">
            <h1 className='header-logo'>Logo</h1>
            <nav className='header-nav grid'>
                <ul className='header-nav-list grid'>
                    <li>View Session</li>
                    <li>Create Workout</li>
                    <li>Workout Suggestions</li>
                </ul>
            </nav>
            <div className='header-profile'>Profile</div>
        </header>
    )
}

export default Header