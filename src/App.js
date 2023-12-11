
import './App.scss';

import MeetMe from './components/meet-me/MeetMe';
import Header from './components/shared/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/shared/footer/Footer';
import MySkils from './components/mySkils/MySkils';
import AboutMe from './components/about-me/AboutMe';
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
