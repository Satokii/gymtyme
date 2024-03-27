import { useNavigate } from "react-router-dom"

function WelcomePage() {    
    const navigate = useNavigate()

    return (
        <div className='home-cover-menu grid'>
                <p>Welcome to <span>GymTyme</span></p>
                <a className='click-to-start' href="#home" onClick={() => {
                    navigate('/home')
                }}>Click to Start</a>
            </div>
    )
}

export default WelcomePage