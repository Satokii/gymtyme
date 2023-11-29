import { useState } from 'react'
import '../../styles/profile/profile.css'

function Profile() {

    const INITIAL_NAV_STATE = [
        {
            title:'New Workout',
            active: false,
            className: 'inactive'
        },
        {
            title: 'Current Workout',
            active: false,
            className: 'inactive'
        },
        {
            title: 'Completed Workout',
            active: false,
            className: 'inactive'
        },
        {
            title: 'Favourite Exercises',
            active: false,
            className: 'inactive'
        }
    ]

    const [selectedNav, setSelectedNav] = useState(INITIAL_NAV_STATE)

    function toggleSelectedNav(navItem) {
        const updatedNav = selectedNav.map((nav) => {
            if (nav.title === navItem.target.innerText) {
                return {...nav, className: 'active'}
            }
            else {
                return {...nav, className: 'inactive'}
            }
        })
        setSelectedNav(updatedNav)
    }


    return (
        <section className="profile--container grid">
            {/* <h2>Profile</h2> */}
            <nav className='profile--nav grid'>
                <ul className='profile--nav-list grid'>
                    {selectedNav.map((nav, index) => 
                        <li key={`${nav.title}-${index}`} className={nav.className} onClick={(e) => toggleSelectedNav(e)}>{nav.title}</li>
                    )}
                </ul>
            </nav>
            <div></div>
        </section>
    )
}

export default Profile