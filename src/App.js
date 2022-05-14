import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import College from './components/pages/College';
import Socialwork from './components/pages/Socialwork';
import ContactUs from './components/pages/ContactUs';
import ECom from './components/pages/ECom';
import BambooMission from './components/pages/BambooMission';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/college" component={College} />
          <Route path="/socialwork" component={Socialwork} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/ecom" component={ECom} />
          <Route path="/bamboomission" component={BambooMission} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
