import chandPic from "./../../assets/images/IMG-4.jpg"
 import './../../assets/styles/Styles.scss';
 import CallIcon from '@mui/icons-material/Call';
 import EmailIcon from '@mui/icons-material/Email';
 import AdsClickIcon from '@mui/icons-material/AdsClick';
 import GitHubIcon from '@mui/icons-material/GitHub';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MeetMe = () => {
    return (
      <>
           <h2 className="center">About Me</h2>
            <div className="details-section shado-effect">
                <div className="dp-img-wrapper">
                    <img id="my-pic" src={chandPic} alt="img" width=""/>
                </div>

                <div className="personal-details-wrapper ">
                    <div className="intro">
                     
                        <h2 className="name text-center-res ">HI. I AM Chand Rahmani</h2>
                        <h4 className="education text-center clr-effect-text"> UI Frontend DEVELOPER</h4>
                        <p className="about text-center-res">I am working with technologies like <strong>HTML5</strong>, <strong>Css3</strong>,   <strong>JavaScript</strong>,  <strong>React</strong>,  <strong></strong>, <strong>Bootstrap</strong>, <strong> Material-Ui </strong>
                         and also tools below:
                            Visual Studio, Notepad++, Photoshop</p>
                    </div>
                    <div className="contact-wrapper ">
                        
                        <a className="contact" href="tel:9631227199" ><CallIcon/> 8709517725 </a>
                        <a href="mailto:chandrahmani254@gmail.com" className="contact"><EmailIcon/> chandrahmani254@gmail.com  </a>
                        <a className="contact" href="https://www.webtechpie.com" target="_blank"><AdsClickIcon /> webtechpie.com</a>
                        <div className="social">
                            <a className="socl-link linkedin" href="https://www.linkedin.com/in/chandrahmani/" target="_blank"><LinkedInIcon/></a>
                      
                            <a className="socl-link github" href="https://github.com/chandrahmani" target="_blank"><GitHubIcon/></a>
                        </div>
                    </div>

                </div>
            </div>
</>
    )
}

export default MeetMe;