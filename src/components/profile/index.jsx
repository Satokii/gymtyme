import { useState } from 'react'
import ProfilePage from './components/ProfilePage'
import NewWorkout from '../workouts/components/NewWorkout'
import CurrentWorkout from '../workouts/components/CurrentWorkout'
import AllWorkouts from '../workouts/components/AllWorkouts'
import FavouriteExercises from './components/FavouriteExercises'
import '../../styles/profile/profile.css'


function Profile({ newWorkout, setNewWorkout, currentWorkout, setCurrentWorkout, showNewWorkout, setShowNewWorkout, showCurrentWorkout, setShowCurrentWorkout, allWorkouts, setAllWorkouts, showPage, setShowPage, favourites }) {
    
    const INITIAL_NAV_STATE = [
        {
            title: 'My Profile',
            className: 'active-profile-nav',
            click: 'profile',
            id: 'nav-profile'
        },
        {
            title:'New Workout',
            className: 'inactive-profile-nav btn-ani-target',
            click: 'new',
            id: 'nav-new'
        },
        {
            title: 'Current Workout',
            className: 'inactive-profile-nav btn-ani-target',
            click: 'current',
            id: 'nav-current'
        },
        {
            title: 'Completed Workouts',
            className: 'inactive-profile-nav btn-ani-target',
            click: 'completed',
            id: 'nav-completed'
        },
        {
            title: 'Favourite Exercises',
            className: 'inactive-profile-nav btn-ani-target',
            click: 'favourites',
            id: 'nav-favourites'
        }
    ]

    const [selectedNav, setSelectedNav] = useState(INITIAL_NAV_STATE)

    function toggleSelectedNav(navItem) {
        const updatedNav = selectedNav.map((nav) => {
            if (nav.title === navItem.target.innerText) {
                return {...nav, className: 'active-profile-nav'}
            }
            else {
                return {...nav, className: 'inactive-profile-nav btn-ani-target'}
            }
        })
        setSelectedNav(updatedNav)
    }

    return (
        <section className="profile--container grid">
            <nav className='profile--nav grid'>
                <ul className='profile--nav-list grid'>
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
                <div className='profile--page-content'>
                    {showPage === 'profile' && <ProfilePage />}
                    {showPage === 'new' && <NewWorkout newWorkout={newWorkout} setNewWorkout={setNewWorkout} currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showNewWorkout={showNewWorkout} setShowNewWorkout={setShowNewWorkout} />}
                    {showPage === 'current' && <CurrentWorkout currentWorkout={currentWorkout} setCurrentWorkout={setCurrentWorkout} showCurrentWorkout={showCurrentWorkout} setShowCurrentWorkout={setShowCurrentWorkout} allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />}
                    {showPage === 'completed' && <AllWorkouts allWorkouts={allWorkouts} setAllWorkouts={setAllWorkouts} />}
                    {showPage === 'favourites' && 
                    <FavouriteExercises />}
                </div>
            </div>
        </section>
    )
}

export default Profile