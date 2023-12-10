import '../../../styles/profile/profile-page.css'

function ProfilePage() {

    return (
        <section className='profile-page--container grid'>
            <h3 className='profile-page--header'>Profile</h3>
            <section className='profile-page--user-info-container grid'>
                <div className='profile-page--personal-details grid'>
                    <h4>Personal Details</h4>
                    <p>Name: John Doe</p>
                    <p>Age: 34</p>
                    <p>Weight: 70kg</p>
                    <p>Height: 180cm</p>
                </div>
                <div className='profile-page--contact-details grid'>
                    <h4>Contact Details</h4>
                    <p>Address: 1 New Street, Citytown, Countyshire, AB12 9ZY</p>
                    <p>Number: 07654321098</p>
                    <p>Email: john@doe.com</p>
                </div>
            </section>
        </section>
    )
}

export default ProfilePage