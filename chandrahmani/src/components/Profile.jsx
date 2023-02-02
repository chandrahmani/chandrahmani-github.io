import './index.css'


const Profile = () => {
    return (
        <>
            <main className="main-wrapper">
                <section className="profile-wrapper">
                    <div class="logo-wrapper">
                        <img src="https://raw.githubusercontent.com/chandrahmani/chandrahmani.github.io/develop/chand-img.jpeg" />
                        <h2>Chand Rahmani</h2>
                        <h3> In ♥️ With Coding, 📷 Photography and Travelling and Cricket</h3>
                        <h3>Specially ! HTML, Cascading Style Sheets, Styled_Components  , JavaScript , React_js ,</h3>
                    </div>
                    <div className="text-wrapper">
                        <p>I am a HTML Developer</p>
                        <p>My Name is Chand I Am In 12th Class I Like Programming</p>
                    </div>

                    <div className="button button-wrapper">
                        <button><a href="">click more</a></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;