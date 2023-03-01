import './index.css'
const Profile = () => {

    return (
        <>
            <main className="main-wrapper">
                <header className='header-wrapper'>
                    <div className="logo-wrapper">
                        <img src="https://media.licdn.com/dms/image/C4E03AQFE_nEE3KyCtw/profile-displayphoto-shrink_400_400/0/1642938148788?e=1683158400&v=beta&t=REXRyle198rBn3WID-bCgk13wqKmeU1affNiFijPmEs" />

                        <div className='info'>
                            <h2>Chand Rahmani</h2>
                            <a href='https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273522,77.2089851,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212!16zL20vMGRsdjA'>
                                New Delhi , IND
                            </a>
                            <h3>I'm a React Developer Who Enjoy Creating Website</h3>
                            <h3> In ♥️ With Coding, 📷 Photography and Travelling and Cricket</h3>
                        </div>
                    </div></header>
                <section className="profile-wrapper">
                    <div className='skill-wrp'>
                        <h2>Skillset</h2>
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

                        <div className="text-wrapper">
                            <p>I am a HTML Developer</p>
                            <p>My Name is Chand I Am In 12th Class I Like Programming</p>
                        </div>
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