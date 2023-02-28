import './index.css'

const Profile = () => {

    return (
        <>
            <main className="main-wrapper">
                <section className="profile-wrapper">
                    <div className="logo-wrapper">
                        <img src="https://media.licdn.com/dms/image/C4E03AQFE_nEE3KyCtw/profile-displayphoto-shrink_400_400/0/1642938148788?e=1683158400&v=beta&t=REXRyle198rBn3WID-bCgk13wqKmeU1affNiFijPmEs" />
                        <LinkedinLogo size={32} />

                        <div className='info'>
                            <h2>Chand Rahmani</h2>
                            <h3> In ♥️ With Coding, 📷 Photography and Travelling and Cricket</h3>
                        </div>
                    </div>

                    <div className='skill-wrp'>
                        <ul className='skills'>
                            <li>Specially !</li>
                            <li>HTML</li>
                            <li>CSS 3</li>
                            <li>Styled_Components </li>
                            <li>JavaScript</li>
                            <li> React_js</li>
                            <li>SASS</li>
                            <li>Git</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="text-wrapper">
                        <p>I am a HTML Developer</p>
                        <p>My Name is Chand I Am In 12th Class I Like Programming</p>
                    </div>

                    <div className="button button-wrapper">
                        <button type='submit'>click more</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;