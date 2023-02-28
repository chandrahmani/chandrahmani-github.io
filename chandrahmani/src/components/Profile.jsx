import { Moon, SunDim } from 'phosphor-react';
import { useState } from 'react';
import './index.css'



const Profile = () => {
    const [click, setClick] = useState();

    const handelClick = () => {
        setClick(!click)
    }

    return (
        <>
            <main className="main-wrapper">
                <div className='theme'>
                    <div onClick={handelClick}>
                        {click ? <SunDim size={32} /> : <Moon size={32} />}
                    </div>
                </div>
                <section className="profile-wrapper">
                    <div className="logo-wrapper">
                        <img src="https://raw.githubusercontent.com/chandrahmani/chandrahmani.github.io/develop/chand-img.jpeg" />
                        <h2>Chand Rahmani</h2>
                        <h3> In ♥️ With Coding, 📷 Photography and Travelling and Cricket</h3>
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