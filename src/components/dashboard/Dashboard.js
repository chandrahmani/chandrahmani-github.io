import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TollIcon from '@mui/icons-material/Toll';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


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