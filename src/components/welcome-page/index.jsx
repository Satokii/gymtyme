import { useNavigate } from "react-router-dom"
import '../../styles/welcome-page.css'

function WelcomePage() {    
    const navigate = useNavigate()

    return (
        <div className='home-cover-menu grid'>
                <p>Welcome to <span>GymTyme</span></p>
                <button className='click-to-start' onClick={() => {
                    navigate('/home')
                }}>Click to Start</button>
            </div>
    )
}

export default WelcomePage