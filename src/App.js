import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


/////////////////////////// Page Imports //////////////////////////////

import Home from './pages/general/Home';
import About from './pages/general/About';
import UserDoc from './pages/general/UserDoc';
import Service from './pages/general/Service';
import Login from './pages/general/Login';
import Register from './pages/general/Register';
import EmptyPage from './pages/error/EmptyPage';
import ContactSection from './components/home/ContactSection';

import Dashboard from './pages/doctor/Dashboard';

import AdminDash from './pages/mods/Dashboard';
////////////////////////// Component Imports //////////////////////////

import Navbar from './components/Navbar';
import Footer from './components/Footer';

///////////////////////////////////////////////////////////////////////


function App(props) {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/__admin__' component={AdminDash} />
          <Route exact path='/contact' component={ContactSection} />
          <Route exact path='/about' component={About} />
          <Route exact path='/how-it-works' component={UserDoc} />
          <Route exact path='/services' component={Service} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/app/doctor' component={Dashboard} />
          <Route component={EmptyPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
