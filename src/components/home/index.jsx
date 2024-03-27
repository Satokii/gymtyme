import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HomeGif from '../../assets/home/home-exercise-gif.gif'
import HomeGifAlt from '../../assets/home/home-exercise-gif-alt.gif'
import '../../styles/home.css'

function Home() {

    const [gif, setGif] = useState(true)

    const navigate = useNavigate()

    function toggleGif() {
        setGif(!gif)
    }

    return (
        <section className="home grid">
            <div id='home' className='home-container'>
                <div className='content grid'>
                    <h3 className='home-what-to-do-header grid'>What would you like to do?</h3>
                    <ul className='home-options-list grid'>
                        <li className='btn-ani-target' onClick={() => {
                            navigate('/workouts')
                            window.scrollTo(0, 0)
                        }}><span></span><span></span><span></span><span></span>Go To The Workouts Page </li>
                        <li className='btn-ani-target' onClick={() => {
                            navigate('/exercises')
                            window.scrollTo(0, 0)
                        }}><span></span><span></span><span></span><span></span>See Exercise Suggestions</li>
                        <li className='btn-ani-target' onClick={() => {
                            navigate('/completed-workouts')
                            window.scrollTo(0, 0)
                        }}><span></span><span></span><span></span><span></span>View Completed Workouts</li>
                    </ul>
                    <div onMouseOver={() => toggleGif()}>
                        {gif ? 
                        <img className='home-gif home-gif-main' src={HomeGif} alt="home gif" /> 
                        : <img className='home-gif home-gif-alt' src={HomeGifAlt} alt="home gif alt" />
                        }
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Home