import { useState } from 'react'
import NewWorkout from '../workouts/components/NewWorkout'
import CurrentWorkout from '../workouts/components/CurrentWorkout'
import AllWorkouts from '../workouts/components/AllWorkouts'
import '../../styles/profile/profile.css'

function Profile({ newWorkout, setNewWorkout, currentWorkout, setCurrentWorkout, showNewWorkout, setShowNewWorkout, showCurrentWorkout, setShowCurrentWorkout, allWorkouts, setAllWorkouts }) {
    
    const INITIAL_NAV_STATE = [
        {
            title:'New Workout',
            className: 'inactive',
            click: 'new',
            id: 'nav-new'
        },
        {
            title: 'Current Workout',
            className: 'inactive',
            click: 'current',
            id: 'nav-current'
        },
        {
            title: 'Completed Workout',
            className: 'inactive',
            click: 'completed',
            id: 'nav-completed'
        },
        {
            title: 'Favourite Exercises',
            className: 'inactive',
            click: 'favourites',
            id: 'nav-favourites'
        }
    ]

    const [selectedNav, setSelectedNav] = useState(INITIAL_NAV_STATE)
    const [showPage, setShowPage] = useState(null)

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
            <nav className='profile--nav grid'>
                <ul className='profile--nav-list btn-ani-target grid'>
                    {selectedNav.map((nav, index) => 
                        <li 
                            key={`${nav.title}-${index}`}
                            id={nav.id}
                            className={nav.className} 
                            onClick={(e) => {
                                toggleSelectedNav(e)
                                setShowPage(nav.click)
                            }}
                            >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {nav.title}
                        </li>
                    )}
                </ul>
            </nav>
            <div className='profile--menu-pages-container grid'>
                <h3 className='profile--header'>Profile</h3>
                <div>
                    {showPage === 'new' && <NewWorkout newWorkout={newWorkout} setNewWorkout={setNewWorkout} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showNewWorkout={showNewWorkout} setShowNewWorkout={setShowNewWorkout} />}
                    {showPage === 'current' && <CurrentWorkout currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showCurrentWorkout={showCurrentWorkout} setShowCurrentWorkout={setShowCurrentWorkout} allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />}
                    {showPage === 'completed' && <AllWorkouts allWorkouts={allWorkouts} />}
                    {showPage === 'favourites' && 
                    <section id='fourth'>
                        <h3>Menu 4</h3>
                    </section>}
                </div>
            </div>
        </section>
    )
}

export default Profile