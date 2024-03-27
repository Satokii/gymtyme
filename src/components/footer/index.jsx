import '../../styles/footer.css'

function Footer({ showInitialDisplay }) {
    
    return (
        <>
            {!showInitialDisplay ? 
                <footer className='footer'></footer>
            : null
            }
        </>
    )
}

export default Footer