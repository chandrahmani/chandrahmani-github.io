
import MeetMe from 'components/meet-me/MeetMe';
import './App.scss';
import MySkils from 'components/mySkils/MySkils';
import Dashboard from 'components/dashboard/Dashboard';
import Header from 'components/shared/header/Header';
import Footer from 'components/shared/footer/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      {/* <AboutMe /> */}
      <div className="main-container">
     
        <MeetMe />
       
        <MySkils />
        <Dashboard />
      

      </div>
      <Footer />
    </div>
  );
}

export default App;
