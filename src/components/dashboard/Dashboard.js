import TollIcon from '@material-ui/icons/Toll';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import WeekendIcon from '@material-ui/icons/Weekend';
import banner1 from './../../assets/images/banner1.jpg';
import bg from './../../assets/images/background.jpg';
import { Link } from '@material-ui/icons';

const Dashboard = () => {
    return (
        <>
            <section className="dashboard-container">
                <div class="common-heading">

                </div>
                <div class="common-heading">
                    <h2> Development Challanges </h2>
                </div>
                <div className="dashboard-wrapper">

                    <div className="box-wrapper">
                        <div className="boxes">

                            <div className="icons-wrapper">
                                <TollIcon />
                            </div>
                            <div className="details-wrapper">
                                <p> Development</p>
                            </div>

                        </div>
                        <div className="boxes">
                            <div className="icons-wrapper">
                                <TrendingUpIcon />
                            </div>
                            <div className="details-wrapper">
                                <p>  eyes on work</p>
                            </div>
                        </div>
                       
                            <div className="boxes">
                                <div className="icons-wrapper">
                                    <WorkOutlineIcon />
                                </div>
                                <div className="details-wrapper">
                                    <p>Web Challenges</p>
                                </div>
                            </div>
                      



                    </div>
                </div>
            </section>
          


        </>
    )
}

export default Dashboard;