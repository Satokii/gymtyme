import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate()

    return (
        <h1 className='header-logo' onClick={() => {
            window.scrollTo(0, 100);
            navigate('/');
        }}>
            <span>G</span>
            <span>y</span>
            <span>m</span>
            <span>T</span>
            <span>y</span>
            <span>m</span>
            <span>e</span>
        </h1>
    )
}

export default Logo